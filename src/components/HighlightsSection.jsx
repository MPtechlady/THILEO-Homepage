import React from 'react';
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaShippingFast, FaHandHoldingHeart } from 'react-icons/fa';
import { FaFileShield, FaGifts } from "react-icons/fa6";
import "../styles/HighlightsSection.css";

const HighlightsSection = () => {
  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Why choose THILEO ?</h2>
        <p className="text-muted">Our Core Values</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {/* Card 1 */}
        <div className="col-md-2 m-2">
          <div className="card-hover p-3 d-flex flex-column align-items-center justify-content-center">
            <PiFlowerLotusBold className="card-hover-icon" />
            <div className="card-hover-title">100% Natural Collections</div>
            <div className="card-hover-desc">
              Pure, handpicked herbal goodness. 
              Crafted for your healthy beauty habits.
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-2 m-2">
          <div className="card-hover p-3 d-flex flex-column align-items-center justify-content-center">
            <FaGifts className="card-hover-icon" />
            <div className="card-hover-title">Premium Gift Sets</div>
            <div className="card-hover-desc">
              Suprise your loved once with our Premium Gift collections.
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-2 m-2">
          <div className="card-hover p-3 d-flex flex-column align-items-center justify-content-center">
            <FaShippingFast className="card-hover-icon" />
            <div className="card-hover-title">Hassle-Free Delivery</div>
            <div className="card-hover-desc">
              Free shipping on your order. 
              Shipping to every corner of India.
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-2 m-2">
          <div className="card-hover p-3 d-flex flex-column align-items-center justify-content-center">
            <FaHandHoldingHeart className="card-hover-icon" />
            <div className="card-hover-title">Personalized Products</div>
            <div className="card-hover-desc">
              Get exclusive customizated products. 
              Specially for you with love and care. 
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-2 m-2">
          <div className="card-hover p-3 d-flex flex-column align-items-center justify-content-center">
            <FaFileShield className="card-hover-icon" />
            <div className="card-hover-title">Quality Assurance</div>
            <div className="card-hover-desc">
              Healthy for you and for the planet. 
              Clinically Tested. 
              Get to know what item suits you the best.
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HighlightsSection;


{/* Card 1 */}
{/* <div className="col-md-4 mb-4">
<div className="card h-100 text-center shadow">
  <div className="card-body">
    <PiFlowerLotusBold size={50} className="text-success mb-3" />
    <h5 className="card-title">100% Natural Collections</h5>
    <p className="card-text">
      All our Products are made with natural herbal ingredients only which are specially hand picked for your healthy beauty habits.
    </p>
  </div>
</div>
</div> */}

{/* Card 2 */}
// {/* <div className="col-md-3 mb-4">
//     <div className="card h-100 shadow d-flex flex-row align-items-center p-3">
//         {/* Icon Section */}
// //         <div className="d-flex justify-content-center align-items-center" style={{ width: "30%" }}>
// //             <PiFlowerLotusBold size={60} className="text-success" />
// //         </div>
// //         {/* Text Section */}
// //         <div className="d-flex flex-column justify-content-center" style={{ width: "70%" }}>
// //         <h5 className="fw-bold mb-2">100% Natural Collections</h5>
// //         <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
// //             Pure, handpicked herbal goodness.
// //             Crafted for your healthy beauty habits.
// //         </p>
// //         </div>
// //     </div>
// // </div> */}

{/* Card 3 */}
{/* <div className="col-md-3 mb-4">
  <div className="card h-100 shadow text-center highlight-card p-3">
    <div className="d-flex flex-column align-items-center justify-content-center">
      <FaShippingFast size={60} className="text-success mb-2" />
      <h5 className="fw-bold mb-0">Hassle-Free Delivery</h5>
    </div>
    <div className="highlight-content text-muted" style={{ fontSize: "0.9rem" }}>
      Free shipping on your order. <br/>
      Shipping to every corner of India.
    </div>
  </div>
</div> */}