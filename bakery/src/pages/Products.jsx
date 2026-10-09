import { useRef } from "react";

import cakeImage from "../../images/cakes.png";
import sconesImage from "../../images/scones.jpeg";
import biscuitImage from "../../images/biscuit.png";
import cupcakesImage from "../../images/cupcakes.png";
import muffinsImage from "../../images/muffins.png";
import pastriesImage from "../../images/pastries.png";

import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { functionOrderUrl } from "../bakeryInfo";

const products = [
  {
    name: "Cakes",
    label: "OUR SPECIALTY",
    image: cakeImage,
    description:
      "Beautiful celebration cakes for weddings, birthdays, functions and every special occasion.",
  },
  {
    name: "Scones",
    label: "OUR SPECIALTY",
    image: sconesImage,
    description:
      "Golden, freshly baked scones, perfect for functions, church events, meetings and family gatherings.",
  },
  {
    name: "Cupcakes",
    label: "FRESHLY BAKED",
    image: cupcakesImage,
    description:
      "Delicious cupcakes prepared with different flavours and beautiful designs.",
  },
  {
    name: "Cookies & Biscuits",
    label: "FRESHLY BAKED",
    image: biscuitImage,
    description:
      "Fresh, crunchy cookies and biscuits perfect for snacks, gifts and tea tables.",
  },
  {
    name: "Muffins",
    label: "FRESHLY BAKED",
    image: muffinsImage,
    description:
      "Soft and freshly baked muffins perfect for breakfast or a quick treat.",
  },
  {
    name: "Customised Pastries",
    label: "MADE FOR YOU",
    image: pastriesImage,
    description:
      "Specially designed pastries created according to your requirements and occasion.",
  },
];

function Products() {
  // ==========================================
  // PRODUCT SCROLL
  // ==========================================

  const productsRef = useRef(null);

  // ==========================================
  // NEXT PRODUCT - LOOPING
  // ==========================================

  const scrollNext = () => {
    const container = productsRef.current;

    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const nextPosition = container.scrollLeft + container.clientWidth;

    // If we are at the last product,
    // go back to the first product.
    if (nextPosition >= maxScrollLeft - 5) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    container.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });
  };

  // ==========================================
  // PREVIOUS PRODUCT - LOOPING
  // ==========================================

  const scrollPrevious = () => {
    const container = productsRef.current;

    if (!container) return;

    // If we are at the first product,
    // jump to the last product.
    if (container.scrollLeft <= 5) {
      container.scrollTo({
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });

      return;
    }

    const previousPosition = Math.max(
      0,
      container.scrollLeft - container.clientWidth
    );

    container.scrollTo({
      left: previousPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="products" className="section products-section">
      <div className="section-content">
        <p className="section-subtitle">
          OUR PRODUCTS
        </p>

        <h2>
          Fresh From Our Bakery
        </h2>

        <div className="section-gold-line"></div>

        <p className="products-intro">
          Our cakes and scones are what we are known for, and we
          bake a full range of treats to complete any table.
        </p>

        <div className="product-navigation">

          <button
            type="button"
            className="product-nav-button"
            onClick={scrollPrevious}
            aria-label="Previous product"
            title="Previous product"
          >
            <FaChevronLeft />
          </button>

          <div
            className="products-scroll"
            ref={productsRef}
          >
            {products.map((product) => (
              <div
                key={product.name}
                className="product-card image-product-card"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              >
                <div className="image-product-overlay">
                  <div className="product-text">
                    <span className="product-label">
                      {product.label}
                    </span>

                    <h3>{product.name}</h3>

                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="product-nav-button"
            onClick={scrollNext}
            aria-label="Next product"
            title="Next product"
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="products-cta">
          <p>
            Planning a function? We bake cakes, scones and treats for
            events of every size.
          </p>

          <div className="hero-buttons">
            <a href="#/functions" className="btn secondary-btn">
              See The Functions We Cater For
            </a>

            <a
              href={functionOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              <FaWhatsapp />
              Order On WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
