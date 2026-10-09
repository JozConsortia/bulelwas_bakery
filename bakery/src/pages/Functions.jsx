import {
  FaRing,
  FaBirthdayCake,
  FaDove,
  FaBaby,
  FaBriefcase,
  FaChurch,
  FaGraduationCap,
  FaGlassCheers,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

import { phoneNumber, functionOrderUrl } from "../bakeryInfo";

const functions = [
  {
    name: "Weddings & Traditional Ceremonies",
    icon: FaRing,
    description:
      "Elegant wedding cakes and generous trays of scones for your guests on the big day.",
  },
  {
    name: "Birthdays & Anniversaries",
    icon: FaBirthdayCake,
    description:
      "Celebration cakes designed around your theme, colours and favourite flavours.",
  },
  {
    name: "Funerals & Memorial Services",
    icon: FaDove,
    description:
      "Freshly baked scones and cakes prepared with care, so your family can focus on what matters.",
  },
  {
    name: "Baby Showers & Christenings",
    icon: FaBaby,
    description:
      "Sweet cakes, cupcakes and treats to welcome the newest member of the family.",
  },
  {
    name: "Corporate & Office Events",
    icon: FaBriefcase,
    description:
      "Scones, muffins and treats for meetings, year-end functions and staff celebrations.",
  },
  {
    name: "Church & Community Events",
    icon: FaChurch,
    description:
      "Tea tables, fundraisers and gatherings, catered with fresh scones and baked goods.",
  },
  {
    name: "Graduations & School Functions",
    icon: FaGraduationCap,
    description:
      "Celebrate achievements with a custom cake and treats for everyone.",
  },
  {
    name: "Parties & Kitchen Teas",
    icon: FaGlassCheers,
    description:
      "From kitchen parties to family get-togethers, we will make your table shine.",
  },
];

const steps = [
  {
    title: "Tell Us About Your Function",
    description:
      "Share the type of event, the date and roughly how many guests you are expecting.",
  },
  {
    title: "Choose What You Need",
    description:
      "Pick your cakes, scones and treats. We are happy to customise designs and flavours.",
  },
  {
    title: "We Bake It Fresh",
    description:
      "Your order is baked fresh for your day, ready for collection or delivered to your venue (fees depend on distance).",
  },
];

function Functions() {
  return (
    <>
      <section id="functions" className="section functions-section">
        <div className="section-content">
          <p className="section-subtitle">
            WE BAKE FOR ALL FUNCTIONS
          </p>

          <h2>
            Whatever The Occasion, We Have You Covered
          </h2>

          <div className="section-gold-line"></div>

          <p className="functions-intro">
            From weddings to memorial services, birthdays to office
            meetings, our cakes and scones have a place at every table.
            Tell us about your function and we will bake for it.
          </p>

          <div className="functions-grid">
            {functions.map(({ name, icon: Icon, description }) => (
              <div key={name} className="function-card">
                <div className="function-icon">
                  <Icon />
                </div>

                <h3>{name}</h3>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section function-steps-section">
        <div className="section-content">
          <p className="section-subtitle">
            HOW IT WORKS
          </p>

          <h2>
            Ordering For Your Function
          </h2>

          <div className="section-gold-line"></div>

          <div className="function-steps">
            {steps.map((step, index) => (
              <div key={step.title} className="function-step">
                <div className="about-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <p className="function-steps-note">
            Please contact us in advance for function orders so we can
            make sure everything is ready for your day.
          </p>

          <div className="hero-buttons">
            <a
              href={functionOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              <FaWhatsapp />
              Book Your Function On WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="btn secondary-btn"
            >
              <FaPhone />
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Functions;
