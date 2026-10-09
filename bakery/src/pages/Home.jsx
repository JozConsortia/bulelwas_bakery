import logo from "../../images/logo.jpeg";
import cakeImage from "../../images/cakes.png";
import sconesImage from "../../images/scones.jpeg";
import {
  FaArrowRight,
  FaWhatsapp,
  FaRing,
  FaBirthdayCake,
  FaDove,
  FaBaby,
  FaBriefcase,
  FaChurch,
  FaGraduationCap,
  FaGlassCheers,
} from "react-icons/fa";

import {
  bakeryName,
  founderName,
  founderQuote,
  functionOrderUrl,
} from "../bakeryInfo";

const specialties = [
  {
    name: "Cakes",
    image: cakeImage,
    description:
      "Wedding cakes, birthday cakes and celebration cakes, designed for your occasion and baked to impress.",
  },
  {
    name: "Scones",
    image: sconesImage,
    description:
      "Golden, fresh scones by the tray, the favourite at functions, church events, meetings and family gatherings.",
  },
];

const occasions = [
  { name: "Weddings", icon: FaRing },
  { name: "Birthdays", icon: FaBirthdayCake },
  { name: "Funerals", icon: FaDove },
  { name: "Baby Showers", icon: FaBaby },
  { name: "Corporate Events", icon: FaBriefcase },
  { name: "Church Events", icon: FaChurch },
  { name: "Graduations", icon: FaGraduationCap },
  { name: "Kitchen Teas", icon: FaGlassCheers },
];

function Home() {
  return (
    <>
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
            Beautiful cakes and freshly baked scones for weddings,
            birthdays, funerals, corporate events and every function
            in between, along with cupcakes, muffins, cookies and more.
          </p>

          <div className="hero-buttons">
            <a
              href={functionOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              <FaWhatsapp />
              Order For Your Function
            </a>

            <a href="#/products" className="btn secondary-btn">
              Explore Our Products
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section specialties-section">
        <div className="section-content">
          <p className="section-subtitle">
            WHAT WE ARE KNOWN FOR
          </p>

          <h2>
            Our Cakes &amp; Scones
          </h2>

          <div className="section-gold-line"></div>

          <div className="specialties-grid">
            {specialties.map((item) => (
              <a
                key={item.name}
                href="#/products"
                className="specialty-card"
              >
                <div
                  className="specialty-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.name}
                ></div>

                <div className="specialty-body">
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section occasions-section">
        <div className="section-content">
          <p className="section-subtitle">
            WE BAKE FOR ALL FUNCTIONS
          </p>

          <h2>
            No Occasion Too Big Or Too Small
          </h2>

          <div className="section-gold-line"></div>

          <ul className="occasion-grid">
            {occasions.map(({ name, icon: Icon }) => (
              <li key={name}>
                <a href="#/functions" className="occasion-tile">
                  <span className="occasion-icon" aria-hidden="true">
                    <Icon />
                  </span>

                  <span className="occasion-name">{name}</span>
                </a>
              </li>
            ))}
          </ul>

          <a href="#/functions" className="btn secondary-btn">
            See How We Cater For Functions
            <FaArrowRight />
          </a>
        </div>
      </section>

      <section className="founder-teaser">
        <blockquote>
          “{founderQuote}”
        </blockquote>

        <p className="founder-teaser-name">
          {founderName}, Founder
        </p>

        <a href="#/about" className="founder-teaser-link">
          Read our founder's message
          <FaArrowRight />
        </a>
      </section>
    </>
  );
}

export default Home;
