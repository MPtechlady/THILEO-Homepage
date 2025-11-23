import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111", color: "#eee", paddingTop: "2rem" }}>
      <Container fluid className="px-5 py-2">
        <Row className="gy-4 gx-5 gy-md-0">
          {/* Newsletter + Social */}
          <Col md={3} >
            <h5 className="fw-semibold mb-3">Join now to PERCIOUS</h5>
            <Form className="d-flex flex-wrap gap-2 mb-3">
              <Form.Control type="email" placeholder="Enter your email" className="w-100" style={{ maxWidth: '460px' }}  />
              <Button variant="outline-light">Subscribe</Button>
            </Form>
            <div className="d-flex gap-3">
              <a href="#"><FaInstagram size={20} className="text-light" /></a>
              <a href="#"><FaFacebookF size={20} className="text-light" /></a>
              <a href="#"><FaYoutube size={20} className="text-light" /></a>
              <a href="#"><FaWhatsapp size={20} className="text-light" /></a>
              <a href="#"><FaLinkedinIn size={20} className="text-light" /></a>
              {/* <a href="#"><FaLinkedin size={20} className="text-light" /></a> */}
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Best Sellers", href: "/products" },
                { label: "Booking", href: "/booking" },
                { label: "Offers & Discount", href: "/off-discount" },
                { label: "Free Consultation", href: "/free-consultation" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-decoration-none text-light d-block mb-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Top Categories */}
          <Col md={2}>
            <h5 className="fw-semibold mb-3">Top Categories</h5>
            <ul className="list-unstyled">
              <li><a href="/products/lip-care" className="text-decoration-none text-light d-block mb-1">Lip Care</a></li>
              <li><a href="/products/skin-care" className="text-decoration-none text-light d-block mb-1">Skin Care</a></li>
              <li><a href="/products/hair-care" className="text-decoration-none text-light d-block mb-1">Hair Care</a></li>
              <li><a href="/products/bridal-nails" className="text-decoration-none text-light d-block mb-1">Bridal Nails</a></li>
              <li><a href="/products/gift-boxes" className="text-decoration-none text-light d-block mb-1">Gift Boxes</a></li>
            </ul>
          </Col>


          {/* Contact Info */}
          <Col md={2}>
            <h5 className="fw-semibold mb-3">Contact Us</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2">
                <FaEnvelope className="me-2" /> info@thileo.com
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" /> +91 73389 36197
              </li>
              <li>
                <FaMapMarkerAlt className="me-2" /> Chennai, India
              </li>
            </ul>
          </Col>

          {/* Brand Info */}
          <Col md={3} className="d-flex flex-column align-items-md-end align-items-start text-md-end text-start">
            <img
              src="/assets/THILEO_logo_Icon.png"
              alt="THILEO Logo"
              height="100"
              className="me-2"
              style={{ transform: 'scale(1.3)' }}
            />
            <div className="d-flex align-items-center mb-2">
              <h5 className="fw-bold mb-0 text-light">THILEO Royal Co.</h5>
            </div>
            <p className="small mb-0 text-light">
              Natural Beauty, Timeless Elegance.<br />
              Your one-stop destination for handmade cosmetics, gifts & glam.
            </p>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        {/* Policies + Copyright */}
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <p className="mb-0 small">
              <a href="/privacy-policy" className="text-decoration-none text-light me-2">Privacy</a> |
              <a href="/purchase-protection" className="text-decoration-none text-light mx-2">100% Purchase Protection</a> |
              <a href="/terms-condition" className="text-decoration-none text-light ms-2">Terms & Conditions</a>
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-2 mt-md-0">
            <p className="mb-0 small">
              © 2022 - {new Date().getFullYear()} <strong>THILEO Royal Co.</strong>. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
//   FaWhatsapp,
// } from "react-icons/fa";

// const Footer = () => {   
//   return (   
//     <footer style={{ backgroundColor: "#111", color: "#eee", paddingTop: "2rem" }}>
//       <Container fluid className="px-5">
//         <Row className="text-start">
//             {/* Column 1: Newsletter */}
//             <Col md={4} className="mb-4 ms-md-3">
//                 <h5 className="fw-semibold">Subscribe to our Newsletter</h5>
//                 <Form className="d-flex gap-2">
//                 <Form.Control type="email" placeholder="Enter your email" />
//                 <Button variant="outline-light">Subscribe</Button>
//                 </Form>
//                 <div className="mt-3">
//                 <FaInstagram className="me-3" size={20} />
//                 <FaFacebookF className="me-3" size={20} />
//                 <FaYoutube className="me-3" size={20} />
//                 <FaWhatsapp className="me-3" size={20} />
//                 </div>
//             </Col>

//             {/* Column 2: Quick Links */}
//             <Col md={2} className="mb-4 ms-md-5">
//                 <h5 className="fw-semibold">Quick Links</h5>
//                 <ul className="list-unstyled">
//                 <li><a href="/" className="text-decoration-none text-light">Home</a></li>
//                 <li><a href="/about" className="text-decoration-none text-light">About</a></li>
//                 <li><a href="/services" className="text-decoration-none text-light">Services</a></li>
//                 <li><a href="/products" className="text-decoration-none text-light">Best Sellers</a></li>
//                 <li><a href="/booking" className="text-decoration-none text-light">Booking</a></li>
//                 <li><a href="/off-discount" className="text-decoration-none text-light">Offers & Discount</a></li>
//                 <li><a href="/free-consultation" className="text-decoration-none text-light">Free Consultation</a></li>
//                 </ul>
//             </Col>

//             {/* Column 3: Contact Info */}
//             <Col md={3} className="mb-4">
//                 <h5 className="fw-semibold">Contact Us</h5>
//                 <ul className="list-unstyled">
//                   <li>Email: info@thileo.com</li>
//                   <li>Phone: +91 73389 36197</li>
//                   <li>Location: Chennai, India.</li>
//                 </ul>
//             </Col>

//             {/* Column 4: Brand Info */}
//             <Col md={2} className="mb-4">
//               <p>
//                 <img className="mg-3"
//                   src="/assets/THILEO_logo_Icon.png"
//                   alt="THILEO Logo"
//                   height="40"
//                   style={{ 
//                       objectFit: 'contain',
//                       transform: 'scale(2)', // zoom it!
//                   }}
//                 />
//               </p>
//               <h4 className="fw-bold">THILEO Royal Co.</h4>
//               <p>Natural Beauty, Timeless Elegance. Your one-stop destination for handmade cosmetics, gifts & glam.</p>
//             </Col>          
//         </Row>

//         {/* <hr className="border-light" /> */}
//         <p className="text-left mb-0 ms-md-2">
//             <a href="/privacy-policy" className="text-decoration-none text-light">Privacy</a> |
//             <a href="/purchase-protection" className="text-decoration-none text-light"> 100% Purchase Protection</a> |
//             <a href="/terms-condition" className="text-decoration-none text-light"> Terms & Conditions</a>
//         </p>

//         <hr className="border-light" />
//         <p className="text-center pb-3 mb-0">© 2022 - {new Date().getFullYear()} THILEO Royal Co. All rights reserved.</p>
//       </Container>
//     </footer>
    
//   );
// };

// export default Footer;


// , { useState, useEffect }

// const [showTopBtn, setShowTopBtn] = useState(false);

// useEffect(() => {
//     const handleScroll = () => {
//     setShowTopBtn(window.scrollY > 300); // Show after 300px scroll
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// };


// {/* <> */}
// {/* Back to Top Button */}
// {showTopBtn && (
//         <Button
//         onClick={scrollToTop}
//         style={{
//             position: "fixed",
//             bottom: "30px",
//             right: "30px",
//             zIndex: 1000,
//             backgroundColor: "#000",
//             border: "none",
//             borderRadius: "50%",
//             padding: "0.75rem 0.9rem",
//         }}
//         >
//         <FaArrowUp color="#fff" />
//         </Button>
//     )}
    // {/* </> */}