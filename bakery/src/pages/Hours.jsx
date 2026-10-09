import { FaClock } from "react-icons/fa";

function Hours() {
  return (
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
  );
}

export default Hours;
