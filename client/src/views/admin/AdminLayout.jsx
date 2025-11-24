import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/Navigationinfo';

// const isActive = (path: String) => location.pathname === path;

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-card border-r">
        <div className="p-6">
          {/* Back to Store */}
          <Link
            to="/"
            className="flex items-center gap-2 mb-8 hover:text-primary transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="font-semibold">Back to Store</span>
          </Link>

          {/* Sidebar Title */}
          <h2 className="text-xl font-serif font-bold mb-6">Admin Panel</h2>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} to={item.href}>
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors
                      ${isActive(item.href) ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
