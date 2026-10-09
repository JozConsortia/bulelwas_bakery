import {
  FaQuoteLeft,
  FaHeart,
  FaHandshake,
  FaFilePdf,
} from "react-icons/fa";
import { emailAddress, founderName, founderQuote } from "../bakeryInfo";

const partnerEmail = `mailto:${emailAddress}?subject=${encodeURIComponent(
  "Partnership enquiry"
)}`;

// PDF copies of each letter, built with "npm run letters".
const lettersPath = `${import.meta.env.BASE_URL}letters/`;

function FounderMessage() {
  return (
    <section id="founder" className="section founder-section">
      <div className="section-content">
        <p className="section-subtitle">
          A MESSAGE FROM OUR FOUNDER
        </p>

        <h2>
          From Our Kitchen To Your Heart
        </h2>

        <div className="section-gold-line"></div>

        <article className="founder-letter">
          <div className="founder-header">
            <div className="founder-monogram" aria-hidden="true">
              RD
            </div>

            <div>
              <h3>{founderName}</h3>

              <p>Founder, Bulelwa's Bakery &amp; Confectionery</p>
            </div>
          </div>

          <FaQuoteLeft className="founder-quote-icon" aria-hidden="true" />

          <p className="founder-greeting">
            Dear friends, customers and partners,
          </p>

          <p>
            Every morning, long before the sun rises over Evaton, our
            ovens are already warm. That quiet hour is my favourite part
            of the day: flour on the counter, butter softening, and the
            first trays going in. It is when I remember why I started
            this bakery: to make something that brings people together.
          </p>

          <div className="founder-panels">
            <div className="founder-panel">
              <div className="founder-panel-icon">
                <FaHeart />
              </div>

              <h4>To Our Customers</h4>

              <p>
                Thank you. Every birthday cake you have trusted us with,
                every box of scones shared at a family gathering, every
                last-minute order for a celebration: you have let us into
                the most special moments of your lives. That is an honour
                I never take lightly. We will keep baking honestly, with
                good ingredients and a lot of heart.
              </p>

              <div className="founder-panel-actions">
                <a
                  href={`${lettersPath}letter-to-our-customers.pdf`}
                  download="Bulelwas Bakery - Letter To Our Customers.pdf"
                  className="founder-download"
                >
                  <FaFilePdf />
                  Download Letter (PDF)
                </a>
              </div>
            </div>

            <div className="founder-panel">
              <div className="founder-panel-icon">
                <FaHandshake />
              </div>

              <h4>To Our Investors &amp; Partners</h4>

              <p>
                We are building more than a bakery. We are building a
                local brand rooted in quality, consistency and community,
                one that will create jobs, support local suppliers and
                prove that something truly special can be made right here
                in our neighbourhood. Our customers keep coming back, and
                we are ready for the next chapter. I invite you to grow
                with us.
              </p>

              <a href={partnerEmail} className="founder-panel-link">
                Partner With Us
              </a>

              <div className="founder-panel-actions">
                <a
                  href={`${lettersPath}letter-to-our-partners.pdf`}
                  download="Bulelwas Bakery - Letter To Our Partners.pdf"
                  className="founder-download"
                >
                  <FaFilePdf />
                  Download Letter (PDF)
                </a>
              </div>
            </div>
          </div>

          <blockquote className="founder-pull-quote">
            {founderQuote}
          </blockquote>

          <div className="founder-signoff">
            <p>With love and gratitude,</p>

            <span className="founder-signature">
              {founderName}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FounderMessage;
