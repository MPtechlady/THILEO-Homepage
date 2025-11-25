import React from "react";
import "../styles/Offers.css";
import offerData from "../data/offer";

const Offers = () => {
  return (
    <section className="offers-section py-5">
      <div className="container text-center">
        {/* <h2 className="mb-4">Exciting Offers</h2> */}
        <div className="row gy-4 justify-content-center">
          {offerData.map((offer, index) => (
            <div className="col-6 col-md-3" key={index}>
              <a href={offer.link} className="text-decoration-none text-dark">
                <div className="offer-card position-relative rounded overflow-hidden shadow-sm">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="img-fluid w-100"
                  />
                  <div className="offer-overlay position-absolute top-50 start-50 translate-middle text-white">
                    <h5 className="m-0">{offer.title}</h5>
                  </div>
                </div>
                <p className="mt-2 fw-semibold">{offer.discount}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
