import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = "block md:inline px-3 py-2 rounded hover:bg-yellow-300 hover:text-black";
  const activeClass = "bg-yellow-300 text-black";

  const links = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "Topup", path: "/topup" },
    { name: "Payment", path: "/payment" },
    { name: "Success", path: "/success" },
    { name: "Admin", path: "/admin/dashboard" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl">Zeijin Topup</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
