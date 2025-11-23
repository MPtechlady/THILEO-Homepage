import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../data/productsData";
import ProductCard from "../components/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/ProductsSection.css";

const ProductsSection = () => {
  const scrollRef = useRef(null); // make sure this comes first!
  
  const scroll = (direction) => {
    const scrollWidth = scrollRef.current?.offsetWidth || 300; // visible area
    if (direction === "left") {
      scrollRef.current.scrollLeft -= scrollWidth;
    } else {
      scrollRef.current.scrollLeft += scrollWidth;
    }
  };

  return (
    <section className="products-section py-5">
      <Container fluid>
        <h2 className="mb-4 text-center text-white">Our Lip Care Products</h2>

        <div className="product-scroll-wrapper d-flex align-items-center">
          <button className="scroll-btn" onClick={() => scroll("left")}>
            <FaArrowLeft />
          </button>

          <div className="scroll-container d-flex overflow-auto" ref={scrollRef}>
            {products.map((product) => (
              <div key={product.id} className="scroll-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button className="scroll-btn" onClick={() => scroll("right")}>
            <FaArrowRight />
          </button>
        </div>

        {/* <Row className="g-3">
          {products.map((product) => (
            <Col 
              key={product.id} 
              xs={12}     // 1 per row on mobile
              sm={12}     // keep 1 per row on small screens too
              md={4}      // 3 per row on medium
              lg={3}      // 4 per row on large
              xl={3}      // 5 per row on extra large
              className="d-flex justify-content-center product-col"
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  );
};

export default ProductsSection;
