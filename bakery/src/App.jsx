import { useEffect, useState } from "react";
import "./App.css";

import { bakeryName } from "./bakeryInfo";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Functions from "./pages/Functions";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Hours from "./pages/Hours";

// ==========================================
// PAGES
// ==========================================

const pages = {
  home: { component: Home, title: "Cakes & Scones For Every Function" },
  about: { component: About, title: "About Us" },
  products: { component: Products, title: "Our Products" },
  functions: { component: Functions, title: "Functions & Events" },
  order: { component: Order, title: "Order" },
  contact: { component: Contact, title: "Contact" },
  hours: { component: Hours, title: "Operating Hours" },
};

// Reads the page name from the URL, e.g. "#/about" -> "about".
// Unknown pages fall back to the home page.
const getPageFromHash = () => {
  const page = window.location.hash.replace(/^#\/?/, "");

  return Object.prototype.hasOwnProperty.call(pages, page) ? page : "home";
};

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // ==========================================
  // CHANGE PAGE WHEN THE URL CHANGES
  // ==========================================

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());

      // Start every new page at the top, jumping straight
      // there instead of smooth-scrolling up the old page.
      const root = document.documentElement;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = "";
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // ==========================================
  // BROWSER TAB TITLE
  // ==========================================

  useEffect(() => {
    document.title = `${pages[currentPage].title} | ${bakeryName}`;
  }, [currentPage]);

  const Page = pages[currentPage].component;

  return (
    <div className="app">
      <Navbar currentPage={currentPage} />

      <main className="page">
        <Page />
      </main>

      <Footer />
    </div>
  );
}

export default App;
