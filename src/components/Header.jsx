import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FaMapMarkerAlt, FaSearch, FaUserCircle, FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = () => {
  const isLoggedIn = false; // later dynamic
  const pincode = "600001"; // can be dynamic later

  return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="py-2 px-3">
      <Container fluid>
        {/* Logo */}
        {/* <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase me-4">
          THILEO
        </Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/" className="me-4">
            <img
                src="/assets/BlackBG_whitelogo.png"
                alt="THILEO Logo"
                height="40"
                style={{ 
                    objectFit: 'contain',
                    transform: 'scale(2)', // zoom it!
                    // transformOrigin: 'left center', // keeps alignment clean
                }}
            />
        </Navbar.Brand>
       
        {/* Location */}
        <div className="d-flex align-items-center text-white me-4">
          <FaMapMarkerAlt className="me-1" />
          <span style={{ fontSize: '14px' }}>Deliver to<br /><strong>{pincode}</strong></span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow-1 mx-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search THILEO products..." />
            <button className="btn btn-outline-light">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* User Dropdown */}
        <Dropdown align="end" className="me-3">
          <Dropdown.Toggle variant="dark" id="user-dropdown" className="text-white border-0">
            {isLoggedIn ? (
              <img src="/profile.png" alt="Profile" className="rounded-circle" width="30" height="30" />
            ) : (
              <span>
                <FaUserCircle className="me-1" />
                Hello, Guest
              </span>
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {isLoggedIn ? (
              <>
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>

        {/* Cart Button */}
        <Link to="/cart" className="btn btn-outline-light me-3">
          <FaShoppingCart className="me-1" /> Cart
        </Link>

        {/* Sidebar Menu (icon only for now) */}
        <button className="btn btn-outline-light">
          <FaBars />
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;

{/* Logo */}
        {/* <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase me-4">
          THILEO
        </Navbar.Brand> */}
         {/* <Navbar.Brand as={Link} to="/" className="me-4">
            <img
                src="/assets/THILEO_logo_Icon.png"
                alt="THILEO Logo"
                height="40"
                style={{ objectFit: 'contain' }}
            />
        </Navbar.Brand> */}

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Header.css'; // optional if you want custom styles later

// const Header = () => {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
//         <div className="container-fluid">
//           <Link className="navbar-brand fw-bold" to="/">
//             THILEO Royal Co.
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/services">Services</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-outline-dark ms-2" to="/login">Login</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
