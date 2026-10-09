import FounderMessage from "../components/FounderMessage";

function About() {
  return (
    <>
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
            Bulelwa's Bakery &amp; Confectionery is best known for
            beautiful cakes and freshly baked scones, and we bake for
            all functions, from weddings and birthdays to funerals,
            church gatherings and corporate events. Every order is made
            with care, quality and attention to detail.
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
                Cakes, scones and treats prepared for weddings,
                birthdays, memorials and every kind of function.
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

      <FounderMessage />
    </>
  );
}

export default About;