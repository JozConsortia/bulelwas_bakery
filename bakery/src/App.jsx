import "./App.css";
import logo from "../images/logo.jpeg";

function App() {
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
            Bulelwa's Bakery
            <span>& Confectionery</span>
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

          <h1>Bulelwa's Bakery & Confectionery</h1>

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
            Bulelwa's Bakery & Confectionery is dedicated to providing
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

          <div className="products-container">
            <div className="product-card">
              <div className="product-icon">🎂</div>
              <h3>Cakes</h3>
              <p>
                Beautiful and delicious cakes for birthdays, celebrations and
                special occasions.
              </p>
            </div>

            <div className="product-card">
              <div className="product-icon">🧁</div>
              <h3>Cupcakes</h3>
              <p>
                Delicious cupcakes prepared with different flavours and
                beautiful designs.
              </p>
            </div>

            <div className="product-card">
              <div className="product-icon">🍪</div>
              <h3>Cookies</h3>
              <p>
                Fresh and tasty cookies perfect for snacks, gifts and special
                occasions.
              </p>
            </div>

            <div className="product-card">
              <div className="product-icon">🍪</div>
              <h3>Biscuits</h3>
              <p>
                Crunchy and delicious biscuits made with care and quality
                ingredients.
              </p>
            </div>

            <div className="product-card">
              <div className="product-icon">🧁</div>
              <h3>Muffins</h3>
              <p>
                Soft and freshly baked muffins that are perfect for breakfast
                or a quick treat.
              </p>
            </div>

            <div className="product-card">
              <div className="product-icon">✨</div>
              <h3>Customised Pastries</h3>
              <p>
                Specially designed pastries created according to your
                requirements and occasion.
              </p>
            </div>
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
            We make ordering easy. Contact us through WhatsApp, phone, email
            or our website.
          </p>

          <div className="order-buttons">
            <a
              href="https://wa.me/27645050305"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              WhatsApp
            </a>

            <a href="tel:0645050305" className="btn">
              Call Us
            </a>

            <a
              href="mailto:bulelwasbakeryconfectionery@gmail.com"
              className="btn"
            >
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
            <div className="contact-card">
              <h3>Phone / WhatsApp</h3>
              <p>064 505 0305</p>

              <a href="tel:0645050305" className="contact-link">
                Call Now
              </a>
            </div>

            <div className="contact-card">
              <h3>Email</h3>
              <p>bulelwasbakeryconfectionery@gmail.com</p>

              <a
                href="mailto:bulelwasbakeryconfectionery@gmail.com"
                className="contact-link"
              >
                Email Us
              </a>
            </div>

            <div className="contact-card">
              <h3>Address</h3>
              <p>
                1484/17 Saint John Road,
                <br />
                Debonair Park,
                <br />
                The Evaton Estates, 1984
              </p>
            </div>

            <div className="contact-card">
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

          <div className="social-section">
            <h3>Follow Us</h3>

            <div className="social-links">
              <a
                href="https://www.instagram.com/bulelwas_bakery"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1EhoaTEb7L/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
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

        <h3>Bulelwa's Bakery & Confectionery</h3>

        <p>Freshly Baked With Love</p>

        <p className="copyright">
          © 2008 Bulelwa's Bakery & Confectionery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;