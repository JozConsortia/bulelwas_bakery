import "./App.css";

import logo from "../images/logo.jpeg";
import cakeImage from "../images/cake.jpeg";
import cookieImage from "../images/scones.jpeg";
import customImage from "../images/custom.jpeg";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function App() {
  // Bakery address
  const bakeryAddress =
    "1484/17 Saint John Road, Debonair Park, The Evaton Estates, 1984";

  // Google Maps directions link
  const locationUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    bakeryAddress
  )}`;

  return (
    <div>
      {/* ================================
          NAVIGATION BAR
      ================================= */}
      <nav className="navbar">
        <div className="brand">
          <img
            src={logo}
            alt="Bulelwa's Bakery & Confectionery Logo"
            className="logo-image"
          />

          <div className="brand-name">
            <span className="brand-main">Bulelwa's Bakery</span>
            <span className="brand-sub">&amp; Confectionery</span>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#products">Products</a>
          </li>

          <li>
            <a href="#order">Order</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ================================
          HOME SECTION
      ================================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-logo-container">
            <img
              src={logo}
              alt="Bulelwa's Bakery & Confectionery"
              className="hero-logo"
            />
          </div>

          <p className="welcome-text">Welcome to</p>

          <h1>Bulelwa's Bakery &amp; Confectionery</h1>

          <h2>Freshly Baked With Love</h2>

          <p className="hero-description">
            Delicious cakes, cupcakes, cookies, biscuits, muffins and
            customised pastries made with care for every special occasion.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn">
              View Our Products
            </a>

            <a href="#order" className="btn btn-outline">
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* ================================
          ABOUT SECTION
      ================================= */}
      <section id="about" className="section about-section">
        <div className="section-content">
          <p className="section-subtitle">ABOUT US</p>

          <h2>About Bulelwa's Bakery</h2>

          <p>
            Bulelwa's Bakery &amp; Confectionery is dedicated to providing
            delicious, freshly baked treats made with care and attention to
            detail. From everyday treats to special celebrations, we create
            beautiful and tasty baked goods for every occasion.
          </p>

          <p>
            Whether you are looking for a birthday cake, cupcakes, muffins,
            biscuits, cookies or customised pastries, we are ready to make
            something special for you.
          </p>
        </div>
      </section>

      {/* ================================
          PRODUCTS SECTION
      ================================= */}
      <section id="products" className="section products-section">
        <div className="section-content">
          <p className="section-subtitle">OUR PRODUCTS</p>

          <h2>What We Bake</h2>

          <p className="products-intro">
            Explore our delicious selection of freshly baked products.
            Scroll horizontally to view all our products.
          </p>

          {/* Horizontal Product Scroll */}
          <div className="products-scroll">

            {/* ================================
                CAKES
            ================================= */}
            <div
              className="product-card image-product-card cake-card"
              style={{
                backgroundImage: `url(${cakeImage})`,
              }}
            >
              <div className="product-image-overlay">
                <div className="product-text">
                  <h3>Cakes</h3>

                  <p>
                    Beautiful and delicious cakes for birthdays, celebrations
                    and special occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* ================================
                CUPCAKES
            ================================= */}
            <div className="product-card">
              <div className="product-icon">🧁</div>

              <h3>Cupcakes</h3>

              <p>
                Delicious cupcakes prepared with different flavours and
                beautiful designs.
              </p>
            </div>

            {/* ================================
                COOKIES
            ================================= */}
            <div
              className="product-card image-product-card cookie-card"
              style={{
                backgroundImage: `url(${cookieImage})`,
              }}
            >
              <div className="product-image-overlay">
                <div className="product-text">
                  <h3>Cookies</h3>

                  <p>
                    Fresh and tasty cookies perfect for snacks, gifts and
                    special occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* ================================
                BISCUITS
            ================================= */}
            <div className="product-card">
              <div className="product-icon">🍪</div>

              <h3>Biscuits</h3>

              <p>
                Crunchy and delicious biscuits made with care and quality
                ingredients.
              </p>
            </div>

            {/* ================================
                MUFFINS
            ================================= */}
            <div className="product-card">
              <div className="product-icon">🧁</div>

              <h3>Muffins</h3>

              <p>
                Soft and freshly baked muffins that are perfect for breakfast
                or a quick treat.
              </p>
            </div>

            {/* ================================
                CUSTOMISED PASTRIES
            ================================= */}
            <div
              className="product-card image-product-card customised-card"
              style={{
                backgroundImage: `url(${customImage})`,
              }}
            >
              <div className="product-image-overlay">
                <div className="product-text">
                  <h3>Customised Pastries</h3>

                  <p>
                    Specially designed pastries created according to your
                    requirements and occasion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="scroll-hint">
            ← Scroll horizontally to see more products →
          </p>
        </div>
      </section>

      {/* ================================
          ORDER SECTION
      ================================= */}
      <section id="order" className="section order-section">
        <div className="section-content">
          <p className="section-subtitle">ORDER WITH US</p>

          <h2>Place Your Order</h2>

          <p>
            We make ordering easy. Contact us through WhatsApp, phone, email
            or our website.
          </p>

          <div className="order-buttons">
            {/* WhatsApp */}
            <a
              href="https://wa.me/27645050305"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaWhatsapp className="button-icon" />
              WhatsApp
            </a>

            {/* Phone */}
            <a href="tel:0645050305" className="btn">
              <FaPhone className="button-icon" />
              Call Us
            </a>

            {/* Email */}
            <a
              href="mailto:bulelwasbakeryconfectionery@gmail.com"
              className="btn"
            >
              <FaEnvelope className="button-icon" />
              Send Email
            </a>
          </div>

          <div className="order-information">
            <div className="info-box">
              <h3>Delivery</h3>

              <p>
                Delivery is available for customised pastries. Delivery fees
                depend on the distance.
              </p>
            </div>

            <div className="info-box">
              <h3>Payment Methods</h3>

              <p>Cash and EFT are accepted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CONTACT SECTION
      ================================= */}
      <section id="contact" className="section contact-section">
        <div className="section-content">
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2>Contact Us</h2>

          <div className="contact-container">

            {/* PHONE */}
            <a
              href="tel:0645050305"
              className="contact-card clickable-card"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>

              <h3>Phone</h3>

              <p>064 505 0305</p>

              <span className="contact-action">
                Tap to call
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/27645050305"
              target="_blank"
              rel="noreferrer"
              className="contact-card clickable-card"
            >
              <div className="contact-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <h3>WhatsApp</h3>

              <p>064 505 0305</p>

              <span className="contact-action">
                Chat with us
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:bulelwasbakeryconfectionery@gmail.com"
              className="contact-card clickable-card"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <h3>Email</h3>

              <p>
                bulelwasbakeryconfectionery@gmail.com
              </p>

              <span className="contact-action">
                Send us an email
              </span>
            </a>

            {/* LOCATION */}
            <a
              href={locationUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-card clickable-card"
            >
              <div className="contact-icon location-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Location</h3>

              <p>
                1484/17 Saint John Road,
                <br />
                Debonair Park,
                <br />
                The Evaton Estates, 1984
              </p>

              <span className="contact-action">
                Get Directions
              </span>
            </a>

            {/* OPENING HOURS */}
            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>

              <h3>Opening Hours</h3>

              <p>
                Monday - Friday
                <br />
                06:00 - 16:00
              </p>

              <p>
                Saturday
                <br />
                06:00 - 14:30
              </p>
            </div>

          </div>

          {/* SOCIAL MEDIA */}
          <div className="social-section">
            <h3>Follow Us</h3>

            <div className="social-links">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bulelwas_bakery"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1EhoaTEb7L/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27645050305"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================================
          FOOTER
      ================================= */}
      <footer>
        <div className="footer-logo">
          <img
            src={logo}
            alt="Bulelwa's Bakery & Confectionery Logo"
          />
        </div>

        <h3>Bulelwa's Bakery &amp; Confectionery</h3>

        <p>Freshly Baked With Love</p>

        <p className="copyright">
          © 2008 Bulelwa's Bakery &amp; Confectionery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;