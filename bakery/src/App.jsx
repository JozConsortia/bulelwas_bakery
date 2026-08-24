import { useRef } from "react";
import "./App.css";

import logo from "../images/logo.jpeg";
import cakeImage from "../images/cake.jpeg";
import cookieImage from "../images/scones.jpeg";
import muffinsImage from "../images/muffins.png";
import pastriesImage from "../images/pastries.png";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function App() {
  // ================================
  // BAKERY ADDRESS
  // ================================

  const bakeryAddress =
    "1484/17 Saint John Road, Debonair Park, The Evaton Estates, 1984";

  // ================================
  // GOOGLE MAPS DIRECTIONS
  // ================================

  const locationUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    bakeryAddress
  )}`;

  // ================================
  // PRODUCT SCROLL REFERENCE
  // ================================

  const productsRef = useRef(null);

  // ================================
  // SCROLL TO NEXT PRODUCT
  // ================================

  const scrollNext = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({
        left: productsRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // ================================
  // SCROLL TO PREVIOUS PRODUCT
  // ================================

  const scrollPrevious = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({
        left: -productsRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

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

            <span className="brand-sub">
              &amp; Confectionery
            </span>
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

          <li>
            <a href="#hours">Hours</a>
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
          </p>

          {/* ================================
              PRODUCT NAVIGATION
          ================================= */}
          <div className="product-navigation">
            {/* LEFT ARROW */}
            <button
              type="button"
              className="product-nav-button"
              onClick={scrollPrevious}
              aria-label="Previous product"
              title="Previous product"
            >
              <FaChevronLeft />
            </button>

            {/* PRODUCT SCROLL CONTAINER */}
            <div
              className="products-scroll"
              ref={productsRef}
            >
              {/* CAKES */}
              <div
                className="product-card image-product-card cake-card"
                style={{
                  backgroundImage: `url(${cakeImage})`,
                }}
              >
                <div className="product-image-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      OUR SPECIALTY
                    </span>

                    <h3>Cakes</h3>

                    <p>
                      Beautiful and delicious cakes for birthdays,
                      celebrations and special occasions.
                    </p>
                  </div>
                </div>
              </div>

              {/* CUPCAKES */}
              <div className="product-card">
                <div className="product-icon">🧁</div>

                <h3>Cupcakes</h3>

                <p>
                  Delicious cupcakes prepared with different flavours
                  and beautiful designs.
                </p>
              </div>

              {/* COOKIES */}
              <div
                className="product-card image-product-card cookie-card"
                style={{
                  backgroundImage: `url(${cookieImage})`,
                }}
              >
                <div className="product-image-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      FRESHLY BAKED
                    </span>

                    <h3>Cookies</h3>

                    <p>
                      Fresh and tasty cookies perfect for snacks,
                      gifts and special occasions.
                    </p>
                  </div>
                </div>
              </div>

              {/* BISCUITS */}
              <div className="product-card">
                <div className="product-icon">🍪</div>

                <h3>Biscuits</h3>

                <p>
                  Crunchy and delicious biscuits made with care and
                  quality ingredients.
                </p>
              </div>

              {/* MUFFINS */}
              <div
                className="product-card image-product-card muffins-card"
                style={{
                  backgroundImage: `url(${muffinsImage})`,
                }}
              >
                <div className="product-image-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      FRESHLY BAKED
                    </span>

                    <h3>Muffins</h3>

                    <p>
                      Soft and freshly baked muffins that are perfect for
                      breakfast or a quick treat.
                    </p>
                  </div>
                </div>
              </div>

              {/* CUSTOMISED PASTRIES */}
              <div
                className="product-card image-product-card customised-card"
                style={{
                  backgroundImage: `url(${pastriesImage})`,
                }}
              >
                <div className="product-image-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      MADE FOR YOU
                    </span>

                    <h3>Customised Pastries</h3>

                    <p>
                      Specially designed pastries created according to
                      your requirements and occasion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              type="button"
              className="product-nav-button"
              onClick={scrollNext}
              aria-label="Next product"
              title="Next product"
            >
              <FaChevronRight />
            </button>
          </div>
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
            We make ordering easy. Contact us through WhatsApp,
            phone, email or our website.
          </p>

          <div className="order-buttons">
            {/* WHATSAPP */}
            <a
              href="https://wa.me/27645050305"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaWhatsapp className="button-icon" />
              WhatsApp
            </a>

            {/* PHONE */}
            <a
              href="tel:0645050305"
              className="btn"
            >
              <FaPhone className="button-icon" />
              Call Us
            </a>

            {/* EMAIL */}
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
                Delivery is available for customised pastries.
                Delivery fees depend on the distance.
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

          <p className="contact-intro">
            We would love to hear from you. Choose an option below
            to get in touch with Bulelwa's Bakery.
          </p>

          {/* ================================
              CONTACT CARDS
          ================================= */}
          <div className="contact-container">
            {/* PHONE */}
            <a
              href="tel:0645050305"
              className="contact-card clickable-card"
              aria-label="Call Bulelwa's Bakery"
              title="Call Bulelwa's Bakery"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>

              <h3>Phone</h3>

              <p className="contact-hidden">
                Tap the button below to call us
              </p>

              <span className="contact-action">
                Call Us
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/27645050305"
              target="_blank"
              rel="noreferrer"
              className="contact-card clickable-card"
              aria-label="Contact Bulelwa's Bakery on WhatsApp"
              title="Open WhatsApp"
            >
              <div className="contact-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <h3>WhatsApp</h3>

              <p className="contact-hidden">
                Tap the button below to chat with us
              </p>

              <span className="contact-action">
                Chat With Us
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:bulelwasbakeryconfectionery@gmail.com"
              className="contact-card clickable-card"
              aria-label="Email Bulelwa's Bakery"
              title="Send us an email"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <h3>Email</h3>

              <p className="contact-hidden">
                Tap the button below to email us
              </p>

              <span className="contact-action">
                Send Email
              </span>
            </a>

            {/* LOCATION */}
            <a
              href={locationUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-card clickable-card"
              aria-label="Open Bulelwa's Bakery location in Google Maps"
              title="Open Google Maps"
            >
              <div className="contact-icon location-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Location</h3>

              <p className="contact-hidden">
                Tap the button below to view our location
              </p>

              <span className="contact-action">
                Get Directions
              </span>
            </a>
          </div>

          {/* ================================
              SOCIAL MEDIA
          ================================= */}
          <div className="social-section">
            <h3>Follow Us</h3>

            <div className="social-links">
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/bulelwas_bakery"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Instagram page"
                title="Instagram"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1EhoaTEb7L/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Facebook page"
                title="Facebook"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/27645050305"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact us on WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          OPERATING HOURS SECTION
      ================================= */}
      <section id="hours" className="section hours-section">
        <div className="section-content">
          <p className="section-subtitle">WHEN TO VISIT</p>

          <h2>Operating Hours</h2>

          <p className="hours-intro">
            We are open during the following hours.
          </p>

          <div className="hours-card">
            <div className="hours-header">
              <div className="hours-icon">
                <FaClock />
              </div>

              <div>
                <h3>Bulelwa's Bakery</h3>

                <p>
                  Come visit us during our business hours.
                </p>
              </div>
            </div>

            <div className="hours-list">
              {/* MONDAY - FRIDAY */}
              <div className="hours-row">
                <div className="day">
                  Monday - Friday
                </div>

                <div className="time">
                  06:00 - 16:00
                </div>
              </div>

              {/* SATURDAY */}
              <div className="hours-row">
                <div className="day">
                  Saturday
                </div>

                <div className="time">
                  06:00 - 14:30
                </div>
              </div>

              {/* SUNDAY */}
              <div className="hours-row">
                <div className="day">
                  Sunday
                </div>

                <div className="time closed">
                  Closed
                </div>
              </div>
            </div>

            <div className="hours-note">
              <strong>Need to order?</strong>

              <p>
                Contact us in advance for customised cakes and
                special orders.
              </p>
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
            alt="Bulelwa's Bakery & Confectionery"
          />
        </div>

        <h3>
          Bulelwa's Bakery &amp; Confectionery
        </h3>

        <p>Freshly Baked With Love</p>

        <p className="copyright">
          © 2008 Bulelwa's Bakery &amp; Confectionery.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;