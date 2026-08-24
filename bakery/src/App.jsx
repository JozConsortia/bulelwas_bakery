import { useRef } from "react";
import "./App.css";

import logo from "../images/logo.jpeg";
import cakeImage from "../images/cakes.png";
import cookieImage from "../images/scones.jpeg";
import biscuitImage from "../images/biscuit.png";
import cupcakesImage from "../images/cupcakes.png";
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
  FaArrowRight,
} from "react-icons/fa";

function App() {
  // ==========================================
  // BAKERY INFORMATION
  // ==========================================

  const bakeryName = "Bulelwa's Bakery & Confectionery";

  const phoneNumber = "0645050305";

  const whatsappNumber = "27645050305";

  const emailAddress = "bulelwasbakeryconfectionery@gmail.com";

  const bakeryAddress =
    "1484/17 Saint John Road, Debonair Park, The Evaton Estates, 1984";

  // ==========================================
  // GOOGLE MAPS
  // ==========================================

  const locationUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    bakeryAddress
  )}`;

  // ==========================================
  // PRODUCT SCROLL
  // ==========================================

  const productsRef = useRef(null);

  // ==========================================
  // NEXT PRODUCT - LOOPING
  // ==========================================

  const scrollNext = () => {
    const container = productsRef.current;

    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const nextPosition = container.scrollLeft + container.clientWidth;

    // If we are at the last product,
    // go back to the first product.
    if (nextPosition >= maxScrollLeft - 5) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    container.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });
  };

  // ==========================================
  // PREVIOUS PRODUCT - LOOPING
  // ==========================================

  const scrollPrevious = () => {
    const container = productsRef.current;

    if (!container) return;

    // If we are at the first product,
    // jump to the last product.
    if (container.scrollLeft <= 5) {
      container.scrollTo({
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });

      return;
    }

    const previousPosition = Math.max(
      0,
      container.scrollLeft - container.clientWidth
    );

    container.scrollTo({
      left: previousPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* ==========================================
          NAVIGATION
      ========================================== */}

      <nav className="navbar">
        <div className="brand">
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
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
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

      {/* ==========================================
          HERO
      ========================================== */}

      <section id="home" className="hero">
        <div className="hero-pattern"></div>

        <div className="hero-content">
          <div className="hero-logo-container">
            <img
              src={logo}
              alt={`${bakeryName} Logo`}
              className="hero-logo"
            />
          </div>

          <p className="hero-small-text">
            WELCOME TO
          </p>

          <h1>
            Bulelwa's Bakery
            <span>&amp; Confectionery</span>
          </h1>

          <div className="gold-line"></div>

          <h2>Freshly Baked With Love</h2>

          <p className="hero-description">
            Delicious cookies, biscuits, cupcakes, muffins and
            beautifully crafted cakes made with care for every
            special occasion.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn primary-btn">
              Explore Our Products
              <FaArrowRight />
            </a>

            <a href="#order" className="btn secondary-btn">
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          ABOUT
      ========================================== */}

      <section id="about" className="section about-section">
        <div className="section-content">
          <p className="section-subtitle">
            ABOUT US
          </p>

          <h2>
            Baked With Care, Made For You
          </h2>

          <div className="section-gold-line"></div>

          <p className="about-main-text">
            Bulelwa's Bakery &amp; Confectionery is dedicated
            to creating delicious freshly baked treats with
            care, quality and attention to detail.
          </p>

          <div className="about-grid">
            <div className="about-box">
              <div className="about-number">
                01
              </div>

              <h3>Quality Baking</h3>

              <p>
                Carefully prepared baked goods made to bring
                delicious flavour and quality to every order.
              </p>
            </div>

            <div className="about-box">
              <div className="about-number">
                02
              </div>

              <h3>Special Occasions</h3>

              <p>
                Cakes, pastries and treats prepared for
                birthdays, celebrations and memorable moments.
              </p>
            </div>

            <div className="about-box">
              <div className="about-number">
                03
              </div>

              <h3>Made For You</h3>

              <p>
                We welcome customised pastry requests to suit
                your celebration and personal preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PRODUCTS
      ========================================== */}

      <section id="products" className="section products-section">
        <div className="section-content">
          <p className="section-subtitle">
            OUR PRODUCTS
          </p>

          <h2>
            Fresh From Our Bakery
          </h2>

          <div className="section-gold-line"></div>

          <p className="products-intro">
            Discover our selection of freshly baked treats,
            prepared with love for every occasion.
          </p>

          <div className="product-navigation">

            {/* ========================================
                LEFT BUTTON
            ======================================== */}

            <button
              type="button"
              className="product-nav-button"
              onClick={scrollPrevious}
              aria-label="Previous product"
              title="Previous product"
            >
              <FaChevronLeft />
            </button>

            {/* ========================================
                PRODUCTS
            ======================================== */}

            <div
              className="products-scroll"
              ref={productsRef}
            >

              {/* CAKES */}
              <div
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${cakeImage})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      OUR SPECIALTY
                    </span>

                    <h3>Cakes</h3>

                    <p>
                      Beautiful and delicious cakes for
                      birthdays, celebrations and special
                      occasions.
                    </p>
                  </div>
                </div>
              </div>

              {/* CUPCAKES */}
              <div
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${cupcakesImage})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      FRESHLY BAKED
                    </span>

                    <h3>Cupcakes</h3>

                    <p>
                      Delicious cupcakes prepared with
                      different flavours and beautiful designs.
                    </p>
                  </div>
                </div>
              </div>

              {/* COOKIES */}
              <div
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${cookieImage})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      FRESHLY BAKED
                    </span>

                    <h3>Cookies</h3>

                    <p>
                      Fresh and tasty cookies perfect for
                      snacks, gifts and special occasions.
                    </p>
                  </div>
                </div>
              </div>

              {/* BISCUITS */}
              <div
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${biscuitImage})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      FRESHLY BAKED
                    </span>

                    <h3>Biscuits</h3>

                    <p>
                      Crunchy and delicious biscuits made with
                      care and quality ingredients.
                    </p>
                  </div>
                </div>
              </div>

              {/* MUFFINS */}
              <div
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${muffinsImage})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      FRESHLY BAKED
                    </span>

                    <h3>Muffins</h3>

                    <p>
                      Soft and freshly baked muffins perfect
                      for breakfast or a quick treat.
                    </p>
                  </div>
                </div>
              </div>

              {/* CUSTOMISED PASTRIES */}
              <div
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${pastriesImage})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      MADE FOR YOU
                    </span>

                    <h3>Customised Pastries</h3>

                    <p>
                      Specially designed pastries created
                      according to your requirements and
                      occasion.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* ========================================
                RIGHT BUTTON
            ======================================== */}

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

      {/* ==========================================
          ORDER
      ========================================== */}

      <section id="order" className="section order-section">
        <div className="section-content">
          <p className="section-subtitle">
            ORDER WITH US
          </p>

          <h2>
            Let's Make Something Delicious
          </h2>

          <div className="section-gold-line"></div>

          <p className="order-intro">
            Place your order conveniently through WhatsApp,
            email, phone or our website.
          </p>

          <div className="order-buttons">

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="btn secondary-btn"
            >
              <FaPhone />
              Call Us
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="btn secondary-btn"
            >
              <FaEnvelope />
              Email Us
            </a>

          </div>

          <div className="order-information">

            <div className="info-box">
              <div className="info-icon">
                🚚
              </div>

              <div>
                <h3>Delivery</h3>

                <p>
                  Deliveries are available for customised
                  pastries. Delivery fees depend on the
                  distance.
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                💳
              </div>

              <div>
                <h3>Payment Methods</h3>

                <p>
                  Cash and EFT payments are accepted.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CONTACT
      ========================================== */}

      <section id="contact" className="section contact-section">
        <div className="section-content">

          <p className="section-subtitle">
            GET IN TOUCH
          </p>

          <h2>
            We Would Love To Hear From You
          </h2>

          <div className="section-gold-line"></div>

          <p className="contact-intro">
            Connect with Bulelwa's Bakery &amp; Confectionery
            through any of the options below.
          </p>

          <div className="contact-container">

            {/* PHONE */}
            <a
              href={`tel:${phoneNumber}`}
              className="contact-card"
              aria-label="Call Bulelwa's Bakery"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>

              <h3>Phone</h3>

              <p>
                Give us a call to discuss your order.
              </p>

              <span className="contact-action">
                Call Us
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              aria-label="WhatsApp Bulelwa's Bakery"
            >
              <div className="contact-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <h3>WhatsApp</h3>

              <p>
                Chat with us directly about your order.
              </p>

              <span className="contact-action">
                Chat With Us
              </span>
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${emailAddress}`}
              className="contact-card"
              aria-label="Email Bulelwa's Bakery"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <h3>Email</h3>

              <p>
                Send us your enquiry or order details.
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
              className="contact-card"
              aria-label="View Bulelwa's Bakery location"
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Location</h3>

              <p>
                Visit us at our bakery location.
              </p>

              <span className="contact-action">
                Get Directions
              </span>
            </a>

          </div>

          {/* SOCIAL MEDIA */}
          <div className="social-section">

            <h3>
              Follow Bulelwa's Bakery
            </h3>

            <p>
              Follow our official pages for updates,
              products and special offers.
            </p>

            <div className="social-links">

              <a
                href="https://www.instagram.com/bulelwas_bakery?igsi=Z3RlcDY2NTgycG95"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/share/1EhoaTEb7L/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          HOURS
      ========================================== */}

      <section id="hours" className="section hours-section">
        <div className="section-content">

          <p className="section-subtitle">
            WHEN TO VISIT
          </p>

          <h2>
            Our Operating Hours
          </h2>

          <div className="section-gold-line"></div>

          <p className="hours-intro">
            Plan your visit around our opening times.
          </p>

          <div className="hours-card">

            <div className="hours-header">

              <div className="hours-icon">
                <FaClock />
              </div>

              <div>
                <h3>
                  Bulelwa's Bakery
                </h3>

                <p>
                  We look forward to serving you.
                </p>
              </div>

            </div>

            <div className="hours-list">

              <div className="hours-row">
                <div className="day">
                  Monday - Friday
                </div>

                <div className="time">
                  06:00 - 16:00
                </div>
              </div>

              <div className="hours-row">
                <div className="day">
                  Saturday
                </div>

                <div className="time">
                  06:00 - 14:30
                </div>
              </div>

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

              <strong>
                Special Orders
              </strong>

              <p>
                Please contact us in advance for customised
                cakes and pastries.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer>

        <div className="footer-top">

          <img
            src={logo}
            alt={`${bakeryName} Logo`}
            className="footer-logo"
          />

          <h3>
            Bulelwa's Bakery &amp; Confectionery
          </h3>

          <p>
            Freshly Baked With Love
          </p>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-contact">

          <a href={`tel:${phoneNumber}`}>
            <FaPhone />
            {phoneNumber}
          </a>

          <a href={`mailto:${emailAddress}`}>
            <FaEnvelope />
            {emailAddress}
          </a>

        </div>

        <p className="footer-address">
          <FaMapMarkerAlt />
          {bakeryAddress}
        </p>

        <div className="footer-social">

          <a
            href="https://www.instagram.com/bulelwas_bakery?igsi=Z3RlcDY2NTgycG95"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/1EhoaTEb7L/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

        </div>

        <p className="copyright">
          © 2008 Bulelwa's Bakery &amp; Confectionery.
          All Rights Reserved.
        </p>

      </footer>
    </div>
  );
}

export default App;