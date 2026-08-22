import "./App.css";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Bulelwa's Bakery & Confectionery</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#order">Order</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Freshly Baked With Love</h1>

          <p>
            Welcome to Bulelwa's Bakery & Confectionery, where we create
            delicious cakes, cupcakes, cookies, biscuits, muffins and
            customised pastries for every occasion.
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

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Bulelwa's Bakery</h2>

        <p>
          Bulelwa's Bakery & Confectionery is dedicated to providing delicious,
          freshly baked treats made with care and attention to detail. From
          everyday treats to special celebrations, we make pastries that make
          every occasion special.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="section products-section">
        <h2>Our Products</h2>

        <div className="products-container">
          <div className="product-card">
            <h3>Cakes</h3>
            <p>Beautiful cakes for birthdays, celebrations and special occasions.</p>
          </div>

          <div className="product-card">
            <h3>Cupcakes</h3>
            <p>Delicious cupcakes prepared with different flavours and designs.</p>
          </div>

          <div className="product-card">
            <h3>Cookies</h3>
            <p>Fresh and tasty cookies perfect for any occasion.</p>
          </div>

          <div className="product-card">
            <h3>Biscuits</h3>
            <p>Crunchy and delicious biscuits made with care.</p>
          </div>

          <div className="product-card">
            <h3>Muffins</h3>
            <p>Soft and freshly baked muffins for breakfast or a quick treat.</p>
          </div>

          <div className="product-card">
            <h3>Customised Pastries</h3>
            <p>
              Specially designed pastries made according to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="section order-section">
        <h2>Place Your Order</h2>

        <p>
          Orders can be placed through WhatsApp, phone, email or directly
          through our website.
        </p>

        <div className="order-buttons">
          <a
            href="https://wa.me/27645050305"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Order via WhatsApp
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

        <p className="delivery-info">
          Delivery is available for customised pastries. Delivery fees depend
          on the distance.
        </p>

        <p>
          <strong>Payment methods:</strong> Cash and EFT
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>

        <p>
          <strong>Phone:</strong> 064 505 0305
        </p>

        <p>
          <strong>Email:</strong>{" "}
          bulelwasbakeryconfectionery@gmail.com
        </p>

        <p>
          <strong>Address:</strong> 1484/17 Saint John Road, Debonair Park,
          The Evaton Estates, 1984
        </p>

        <p>
          <strong>Opening Hours:</strong>
          <br />
          Monday - Friday: 06:00 - 16:00
          <br />
          Saturday: 06:00 - 14:30
        </p>

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
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Bulelwa's Bakery & Confectionery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;