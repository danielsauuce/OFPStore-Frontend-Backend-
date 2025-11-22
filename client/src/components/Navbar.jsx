import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Users, Menu, X, Sun, Moon } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const navIcons = [
  { icon: <ShoppingCart size={18} />, path: '/cart' },
  { icon: <Users size={18} />, path: '/auth' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  return (
    <nav className="bg-card/95 w-full p-4 sticky top-0 z-50 shadow backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex justify-between pl-5 pr-3 items-center">
        {/* Logo */}
        <Link to="/">
          <h2 className="text-xl font-bold font-serif text-[#815331]">Olayinka Furniture Palace</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row space-x-10 text-[#815331] items-center">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}

          {navIcons.map((item, i) => (
            <Link key={i} to={item.path}>
              {item.icon}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger + Cart) */}
        <div className="flex md:hidden items-center space-x-8 text-[#815331]">
          {/* Cart Icon */}
          <Link to="/cart">
            <ShoppingCart size={20} />
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-[#815331] dark:text-[#e8d9c3] bg-[#faf8f5] dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col space-y-3 pt-2">
            {navIcons.map((item, i) => (
              <Link key={i} to={item.path} onClick={() => setOpen(false)}>
                {item.icon}
              </Link>
            ))}
          </div>

          <button
            className="pt-2 flex items-center"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'dark' ? (
              <Sun size={22} className="h-5 w-5 rotate-0 scale-100 transition-all" />
            ) : (
              <Moon size={22} className="h-5 w-5 rotate-0 scale-100 transition-all" />
            )}
            <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
