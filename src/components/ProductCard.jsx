import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../styles/ProductCard.css"; // for custom hover styles

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const {
    name, description, price, discount, rating,
    stock, image, hoverImage
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <Card 
      className="product-card shadow-sm border-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image-container">
        <Card.Img 
          variant="top" 
          src={hovered && hoverImage ? hoverImage : image} 
          alt={name}
          className="product-image"
        />
        <div className="quick-view-btn">
          <Button size="sm" variant="light">Quick View</Button>
        </div>
      </div>

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-1">{name}</h6>
            <span className="text-success small fw-bold">★ {rating}</span>
          </div>

          <div className="d-flex gap-2 mt-2 justify-content-start align-items-center mb-2">
            <Button variant="outline-dark" size="sm">10g</Button>
            <Button variant="outline-dark" size="sm">50g</Button>
            <Button variant="outline-dark" size="sm">100g</Button>            
          </div>
        
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className={`badge ${stock === "Sold Out" ? "bg-danger" : "bg-success"}`}>
              {stock}
            </span>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark small px-2">
                <Button variant="outline-dark" size="sm">♥</Button>
              </span>
              <span className="text-dark small">
                <Button variant="outline-danger" size="sm">♥</Button>      
              </span>
            </div>
          </div>

          <p className="text-muted small product-desc">
            {description.length > 60 
              ? `${description.slice(0, 60)}... ` 
              : description
            } &nbsp;
            <Link to={`/products/${product.id}`} className="text-decoration-none text-danger small fs-5">Explore</Link>
            {/* <a href={`/products/${product.id}`} className="text-decoration-none text-danger small">more</a> */}
          </p>

        </div>

        <div className="d-flex align-items-center justify-content-start fs-4">
          <span className="fw-bold">₹{discountedPrice}</span> &nbsp;
          <small className="text-muted text-decoration-line-through">₹{price}</small> &nbsp;
          <small className="text-success fw-bold">({discount}%)</small>
        </div>

        <div className="d-flex gap-2 justify-content-start align-items-center">
          <Button variant="danger" size="sm">Buy Now</Button>
          <Button variant="dark" size="sm">Add to Cart</Button>
          {/* <Button variant="outline-danger" size="sm">♥</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


// const ProductCard = ({ product }) => {
//   const [hovered, setHovered] = useState(false);
//   const {
//     name, description, price, discount, rating,
//     stock, image, hoverImage
//   } = product;

//   const discountedPrice = price - (price * discount) / 100;

//   return (
//     <Card 
//       className="product-card h-100 shadow-sm border-0"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="product-image-container position-relative">
//         <Card.Img 
//           variant="top" 
//           src={hovered && hoverImage ? hoverImage : image} 
//           alt={name}
//           className="product-image"
//         />
//         <div className="quick-view-btn">
//           <Button size="sm" variant="light">Quick View</Button>
//         </div>
//       </div>

//       <Card.Body>
//         <h6 className="fw-bold mb-1">{name}</h6>
//         <p className="text-muted small mb-2">{description}</p>

//         <div className="d-flex align-items-center mb-2">
//           <span className="fw-bold me-2">₹{discountedPrice}</span>
//           <span className="text-decoration-line-through text-muted small">₹{price}</span>
//           <span className="text-success ms-2 small">({discount}% OFF)</span>
//         </div>

//         <div className="rating text-warning mb-2">★ {rating}</div>

//         <div className="stock-status mb-2">
//           <span className={`badge ${stock === "Sold Out" ? "bg-danger" : "bg-success"}`}>
//             {stock}
//           </span>
//         </div>

//         {/* <div className="tags mb-2">
//           {tags.map((tag, index) => (
//             <span key={index} className="badge bg-secondary me-1">{tag}</span>
//           ))}
//         </div> */}

//         <div className="d-flex gap-2">
//           <Button variant="primary" size="sm">Add to Cart</Button>
//           <Button variant="outline-danger" size="sm">♥</Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };