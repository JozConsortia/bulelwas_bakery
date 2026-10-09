import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  phoneNumber,
  emailAddress,
  locationUrl,
  instagramUrl,
  facebookUrl,
  whatsappUrl,
} from "../bakeryInfo";

function Contact() {
  return (
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
            href={whatsappUrl}
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
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>

            <a
              href={whatsappUrl}
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
  );
}

export default Contact;
