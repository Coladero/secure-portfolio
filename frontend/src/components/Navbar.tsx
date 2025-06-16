import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b border-terminal-green shadow-md font-mono">
      <div className="relative max-w-200 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-center relative">
          {/* Logo on the left */}
          <div className="absolute left-0 flex-shrink-0 flex items-center h-full">
            <img className="h-8 w-8" src="/logo.png" alt="Logo" />
          </div>

          {/* Desktop menu centered */}
          <div className="hidden md:flex space-x-8 items-center mx-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive
                    ? "border-terminal-green shadow-[0_0_4px_#00FF00]"
                    : "text-gray-300 hover:text-terminal-green"
                  } text-sm md:text-base px-4 py-2 rounded-md no-underline transition-all duration-200`
                }
              >
                <span className="text-gray-400 mr-2">➜</span> {item.name.toLowerCase()}
              </NavLink>
            ))}
          </div>

          {/* Burger on the right */}
          <div className="absolute right-0 md:hidden flex items-center h-full">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="text-terminal-green" /> : <Menu className="text-terminal-green" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown (visible only when isOpen) */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive
                    ? "bg-terminal-green text-black"
                    : "text-slate-200 hover:text-terminal-green"
                  } block px-4 py-2 rounded-md text-sm font-mono no-underline transition-all duration-200`
                }
              >
                <span className="text-gray-400 mr-2">➜</span> {item.name.toLowerCase()}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
