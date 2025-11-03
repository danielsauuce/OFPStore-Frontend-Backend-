import { ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#faf8f5] w-full flex justify-around p-4  backdrop-blur sticky top-0 z-50 ">
      <Link to={"/"}>
        <h2 className="text-xl font-bold font-serif gradient-text  text-[#815331] ">
          Olayinka Furniture Palace
        </h2>
      </Link>

      <div className=" hidden md:flex flex-row space-x-8 text-[#815331]">
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>
          <ShoppingCart />
        </Link>
        <Link>
          <Users />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
