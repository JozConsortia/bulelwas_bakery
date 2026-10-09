import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../images/logo.jpeg";
import { bakeryName } from "../bakeryInfo";

const pages = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "functions", label: "Functions" },
  { id: "order", label: "Order" },
  { id: "contact", label: "Contact" },
  { id: "hours", label: "Hours" },
];

function Navbar({ currentPage }) {
  // Only used on phones and tablets, where the links
  // are hidden behind the menu button.
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className={menuOpen ? "navbar menu-open" : "navbar"}>
      <a href="#/home" className="brand" onClick={closeMenu}>
        <img
          src={logo}
          alt={`${bakeryName} Logo`}
          className="logo-image"
        />

        <div className="brand-name">
          <span className="brand-main">
            Bulelwa's Bakery
          </span>

          <span className="brand-sub">
            &amp; Confectionery
          </span>
        </div>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul id="nav-links" className="nav-links">
        {pages.map((page) => (
          <li key={page.id}>
            <a
              href={`#/${page.id}`}
              className={currentPage === page.id ? "active" : undefined}
              aria-current={currentPage === page.id ? "page" : undefined}
              onClick={closeMenu}
            >
              {page.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
