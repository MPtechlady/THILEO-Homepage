import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoriesSection from './components/CategoriesSection';
import CarouselSection from "./components/CarouselSection";
import HighlightsSection from "./components/HighlightsSection";
import ProductsSection from "./pages/ProductsSection";
import UpdatesSection from "./components/UpdatesSection";
import TestimonialSlider from './components/TestimonialSlider';
import BloggingSection from "./components/BloggingSection";
import Offers from "./components/Offers";
import ExploreSection from "./components/ExploreSection";
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <CategoriesSection />
      <CarouselSection />
      <Offers />
      <ProductsSection /> 
      <ExploreSection />
      <HighlightsSection />
      <ProductsSection />
      <TestimonialSlider />
      <div className="cta-bar fs-6 fs-md-5">
        🌿 All products are <span className="text-success">certified & tested for safety</span> | 🛡️ <span className="text-primary">Trusted by 1,000+ customers across India</span>
      </div>
      <Footer />      
    </Router>
  );
}

export default App;

 {/* <Routes> */}
        {/* Add actual pages later */}
        {/* <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} /> */}
      {/* </Routes> */}
      
      {/* <UpdatesSection /> */}
           
      
      {/* <BloggingSection /> */}
      {/* <Blog /> */}