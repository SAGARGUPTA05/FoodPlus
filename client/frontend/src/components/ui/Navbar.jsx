import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ShoppingCart, Loader2, Menu, X, User2, User, ListOrdered, PackageCheck, UtensilsCrossed, SquareMenu, HandPlatter } from "lucide-react";

function Navbar() {
  const [admin, setAdmin] = useState(true);
  const loading = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateHandler=()=>{
    setIsMobileMenuOpen(false)
  }
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-[300] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-20 h-16">
        {/* Logo */}
        <Link to="/" className="text-black no-underline">
          <h1 className="font-bold md:font-extrabold text-2xl text-black">
            FoOdplus
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-black no-underline hover:text-gray-700">
            <p className="text-black">Home</p>
          </Link>
          <Link
            to="/profile"
            className="text-black no-underline hover:text-gray-700"
          >
            <p className="text-black">Profile</p>
          </Link>
          <Link
            to="/order/status"
            className="text-black no-underline hover:text-gray-700"
          >
            <p className="text-black">Order</p>
          </Link>

          {/* Admin Dropdown */}
          {admin && (
            <div className="relative">
              <button
                className=" font-medium text-black outline-none focus:ring-0"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Dashboard
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-md rounded-md p-2 mt-2 w-40">
                  <Link
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    to="/admin/restaurant"
                    className="block px-4 py-2 hover:bg-gray-200 text-black no-underline"
                  >
                    <p className="text-black">Restaurant</p>
                  </Link>
                  <Link
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    to="/admin/menu"
                    className="block px-4 py-2 hover:bg-gray-200 text-black no-underline"
                  >
                   <p className="text-black"> Menu</p>
                  </Link>
                  <Link
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    to="/admin/orders"
                    className="block px-4 py-2 hover:bg-gray-200 text-black no-underline"
                  >
                    <p className="text-black">Orders</p>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Section (Theme, Cart, Login) */}
        <div className="hidden md:flex items-center gap-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition  "
          >
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>

          {/* Shopping Cart */}
          <Link to="/cart" className="relative cursor-pointer ">
            <ShoppingCart className="w-6 h-6 text-black" />
            <div className="absolute -top-2 -right-2 text-xs rounded-full w-4 h-4 bg-red-500 text-white flex items-center justify-center">
              5
            </div>
          </Link>

          {/* Login Button */}
          <div>
            {loading ? (
              <button className="btn-orange flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait
              </button>
            ) : (
              <button  className="btn-orange"><Link to="/login"><p className="text-white">Login</p></Link></button>
            )}
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute z-[300] right-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden lg:hidden  shadow-md pl-32 h-[100vh] w-[100%] bg-black/70 absolute top-0 z-[200]  ">
          <div className="w-full h-full bg-white pt-16">
            <div className=" w-full h-full flex flex-col gap-y-8 ">
              <div className="flex  items-center justify-between px-3">
                <h5 className="text-2xl font-bold">FoodPlus</h5>
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition  "
                >
                  {isDarkMode ? (
                    <Moon className="w-4 h-4 text-gray-700" />
                  ) : (
                    <Sun className="w-4 h-4 text-yellow-500" />
                  )}
                </button>
              </div>
              <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2 px-8 " onClick={navigateHandler}>
                <User></User>
                <Link to="/profile" ><p className="text-black">Profile</p></Link>
              </div>
              <div className="flex gap-x-2 px-8" onClick={navigateHandler}>
              <HandPlatter />
                <Link to="/order/status" ><p className="text-black">Order</p></Link>
              </div>
              <div className="flex gap-x-2 px-8" onClick={navigateHandler}>
              <ShoppingCart />
                <Link to="/cart" ><p className="text-black">Cart</p></Link>
              </div>
              <div className="flex gap-x-2 px-8" onClick={navigateHandler}>
              <SquareMenu />
                <Link to="/admin/menu" ><p className="text-black">Menu</p></Link>
              </div>
              <div className="flex gap-x-2 px-8" onClick={navigateHandler}>
              <UtensilsCrossed />
                <Link to="/admin/restaurant" ><p className="text-black">Restaurant</p></Link>
              </div>
              <div className="flex gap-x-2 px-8" onClick={navigateHandler}>
              <PackageCheck />
                <Link to="/admin/orders" ><p className="text-black">Restaurant Orders</p></Link>
              </div>
              </div>
              
              <div className="flex gap-x-6 px-4  mt-20">
                  <div>CN</div>
                  <div className="font-extrabold">Food Plus</div>
       
              </div>
              <div className="flex gap-x-6 px-4">
                <button className="btn-orange w-full">Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
