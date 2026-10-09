import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  phoneNumber,
  emailAddress,
  whatsappUrl,
  functionOrderUrl,
} from "../bakeryInfo";

function Order() {
  return (
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
          Place your order for cakes, scones or any function
          conveniently through WhatsApp, email or phone.
        </p>

        <div className="order-buttons">

          <a
            href={whatsappUrl}
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

        <div className="order-function-banner">
          <div>
            <h3>Ordering For A Function?</h3>

            <p>
              Send us the type of function, the date and the number of
              guests, and we will put together the perfect order of
              cakes, scones and treats.
            </p>
          </div>

          <a
            href={functionOrderUrl}
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn"
          >
            <FaWhatsapp />
            Send Function Details
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
  );
}

export default Order;
