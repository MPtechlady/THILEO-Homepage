import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/App.css"; // if you're adding custom styles here

const slides = [
  // {
    // title: "Royal Skincare Collection",
    // subtitle: "Feel the glow of nature",
    // image: "/assets/slide1.jpg",
    // button: "Shop Now",
  //   link: "/skincare"
  // },
  {
    title: "Free Skin & Hair Consultation",
    subtitle: "Tailored tips from our experts",
    image: "/assets/slide2.jpg",
    button: "Book Free",
    link: "/consultation"
  },
  {
    title: "Bridal Makeup & Nail Art",
    subtitle: "For your most special day",
    image: "/assets/slide3.jpg",
    button: "Explore",
    link: "/makeup"
  },
  {
    title: "Bridal Makeup & Nail Art",
    subtitle: "For your most flawless day",
    image: "/assets/slide4.jpg",
    button: "Explore",
    link: "/Haircare"
  },
  {
    title: "Online Professional Beauty Course",
    subtitle: "Specially for you",
    image: "/assets/slide5.jpg",
    button: "Explore",
    link: "/academy"
  }
];

// Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 1,
        color: "#fff",
      }}
      onClick={onClick}
    />
  );
};

// Prev Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
        color: "#fff",
      }}
      onClick={onClick}
    />
  );
};

const CarouselSection = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-bg-wrapper">
      <div className="carousel-wrapper custom-carousel px-4 px-md-5 py-1">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide position-relative text-center">
              <img src={slide.image} alt={slide.title} className="img-fluid w-100" />
              {/* <div className="carousel-overlay position-absolute top-50 start-50 translate-middle text-light">
                <h2 className="fw-bold">{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <a href={slide.link} className="btn btn-light mt-2">{slide.button}</a>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSection;
