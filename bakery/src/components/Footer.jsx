import logo from "../../images/logo.jpeg";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  bakeryName,
  phoneNumber,
  emailAddress,
  bakeryAddress,
  instagramUrl,
  facebookUrl,
  whatsappUrl,
} from "../bakeryInfo";

function Footer() {
  return (
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
          Cakes &amp; Scones For Every Function
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
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href={whatsappUrl}
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
  );
}

export default Footer;
