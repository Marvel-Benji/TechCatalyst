import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, MoonIcon, SunIcon, Heart} from "lucide-react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navLinkStyle = ({isActive}) => isActive
    ? "text-blue-500 text-xl font-bold"
    : "text-white dark:text-black text-xl hover:text-gray-300 transition-all duration-300";

  const navMobile = ({isActive}) => isActive
    ? "text-black text-xl font-bold"
    : "text-black text-xl hover:text-white transition-all duration-300";

  return (
    <nav className="fixed left-4 right-4 top-2 md:left-[10%] md:right-[10%] md:top-4 bg-gray-800 dark:bg-gray-600 flex items-center justify-between z-50 shadow-md rounded-lg px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold text-white dark:text-black transition-colors duration-300">TechCatalyst</h1>
      </div>
      <div className="hidden md:flex gap-6 items-center transition-all duration-300">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
      <NavLink to="/about" className={navLinkStyle}>About</NavLink>
      <NavLink to="/courses" className={navLinkStyle}>Courses</NavLink>
      <NavLink to="/login" className={navLinkStyle}>Login</NavLink> 
      </div>

      {/* <button className="md:hidden cursor-pointer p-2 rounded-lg" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <SunIcon className="text-white font-2xl" /> : <MoonIcon className="text-white font-2xl" />}
      </button> */}
      <Link to="/favorites" className="flex md:hidden">
        <Heart className="w-5 h-5 text-white dark:text-black mt-2" />
        <span className=" text-white text-sm dark:text-black mt-3">[{favorites.length}]</span>
      </Link>

        <div className={`absolute top-full left-0 w-full bg-slate-800 text-white text-center py-4 rounded-lg md:hidden flex flex-col gap-4 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}>
          <NavLink className={navMobile} to="/">Home</NavLink>
          <NavLink className={navMobile} to="/about">About</NavLink>
          <NavLink className={navMobile} to="/courses">Courses</NavLink>
          <NavLink className={navMobile} to="/login">Login</NavLink>
        </div>
      <button className="md:hidden text-white text-3xl cursor-pointer transition-all duration-300" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
      </button>

      {menuOpen && (
          <div className={`absolute top-full left-0 w-full bg-gray-800 dark:bg-gray-500 text-white text-center py-4 rounded-lg md:hidden flex flex-col justify-between gap-4 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-74 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}>
          <NavLink className={"text-white text-xl hover:text-gray-400 dark:text-gray-900 dark:hover:text-gray-300 transition-all duration-300 py-2"} to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink className={"text-white text-xl hover:text-gray-400 dark:text-gray-900 dark:hover:text-gray-300 transition-all duration-300"} to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink className={"text-white text-xl hover:text-gray-400 dark:text-gray-900 dark:hover:text-gray-300 transition-all duration-300"} to="/courses" onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink className={"text-white text-xl hover:text-gray-400 dark:text-gray-900 dark:hover:text-gray-300 transition-all duration-300"} to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
          <div className="flex items-center justify-between max-w-5xl mx-4 dark:bg-gray-700 border border-white/10 dark:border-black/30 rounded-2xl mt-4 py-2 px-4">
            <p className="text-white text-xl dark:text-gray-300 transition-all duration-300">Light/Dark Mode</p>
            {/* Theme toggle button */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              // Change the switch background depending on the current mode
              className={`relative w-12 h-5 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? "bg-blue-400"
                  : "bg-gray-300"
              }`}
            >
              {/* Toggle circle */}
              <span
                className={`absolute left-1 top-1 w-3 h-3 rounded-full transition-transform duration-300 ${
                  darkMode 
                    ? "bg-white translate-x-7" // Move the circle to the right in dark mode
                    : "bg-gray-600 translate-x-0" // Keep the circle on the left in light mode
                }`}
              />
            </button>
          </div>
        </div>
      )}
      <Link to="/favorites" className="hidden md:flex items-center gap-2">
        <Heart className="w-5 h-5 text-white dark:text-black" />
        <span className="text-white dark:text-black">Favorites ({favorites.length})</span>
      </Link>
      {/* <button className="hidden md:flex cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <SunIcon className=" text-white font-2xl" /> : <MoonIcon className=" text-white font-2xl" />}
      </button> */}
      
    </nav>
  );
}

export default Navbar;