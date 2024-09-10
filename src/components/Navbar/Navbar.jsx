import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Logo from "../../assets/logo.png";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Popular Wear", link: "/#kids-wear" },
  { id: 4, name: "Homely Wear", link: "/#mens-wear" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#trending-products" },
  { id: 2, name: "Best Selling", link: "/#best-selling" },
  { id: 3, name: "Top Rated", link: "/#top-rated" },
];

const Navbar = ({
  searchTerm,
  setSearchTerm,
  handleOrderPopup,
  onSearchClick,
}) => {
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearchClick(); // Trigger search on Enter key press
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/90 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-4xl flex gap-1">
              <img src={Logo} alt="Brand Logo" className="w-36" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress} // Handle Enter key press
                placeholder="Search..."
                className="p-2 rounded-full border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none"
              />
              <button
                onClick={onSearchClick} // Trigger search on button click
                className="absolute right-0 top-1.5 mt-1 mr-5 bg-gradient-to-r from-blue-400 to-purple-600 text-white py-0 px-2 rounded-full hover:from-blue-600 hover:to-purple-700 shadow-md transition-all duration-200 ease-in-out"
              >
                Search
              </button>
            </div>

            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-third to-fourth text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              aria-label="Open Order Popup"
            >
              <span className="hidden group-hover:block">Order</span>
              <FaShoppingCart className="text-xl drop-shadow-sm" />
            </button>

            <DarkMode />
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-5">
          {Menu.map((menuItem) => (
            <li key={menuItem.id}>
              <a
                href={menuItem.link}
                className="px-5 hover:text-primary duration-200"
              >
                {menuItem.name}
              </a>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <button
              className="px-4 hover:text-primary duration-200 flex items-center gap-2"
              aria-expanded="false"
              aria-haspopup="true"
              type="button"
            >
              <span>More</span>
              <FaCaretDown />
            </button>
            <ul className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {DropdownLinks.map((link) => (
                <li
                  key={link.id}
                  className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
