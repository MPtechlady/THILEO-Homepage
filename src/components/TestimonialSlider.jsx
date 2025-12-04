import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TestimonialSection.css";
import { FaHeart } from "react-icons/fa";

const testimonials = [
  {
    text: "Thank you for Skincare products from THILEO Natural Cosmetics, at very affordable prices, the products are very satisfying. I used PRO DUST herbal bath powder Nalangu maavu twice a week on my 4 years old daughter — good improvement in skin tone. Thanks for recommending this product for me.",
    name: "Anu .V",
    profession: "PRO Makeup Trainer",
    rating: 5,
  },
  {
    text: "Since 2yrs my skin was full of pimples and acne scars. By using THILEO face wash there is an amazing result I had seen in my face... and more products I had been used, their products shown an amazing result.... thank u THILEO ❤️",
    name: "Malar Sathiyamoorthi",
    profession: "Student",
    rating: 5,
  },
  {
    text: "EXCELLENT SERVICE RENDERED AND WOULD LIKE TO VISIT AGAIN. THE QUALITY OF BEAUTY PRODUCTS ARE AFFORDABLE AND WORTH. IT SEEMS UNIQUE COMPARED TO OTHER AVAILABLE MARKET PRODUCTS.",
    name: "Jayapal Raj",
    profession: "Interior Designer",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-5 pb-3 testimonial" id="testimonials">
      <div className="container text-center">
        <h2 className="mb-2">
          Words from Our Delighted <span className="text-primary">PRECIOUS</span> Customers
        </h2>
        <p className="text-muted mb-4">They say it better than we do.</p>

        <div className="testimonial-carousel-wrapper mx-auto" style={{ maxWidth: "800px", minHeight: "220px" }}>
          <Carousel fade indicators={false} controls={true} interval={6000} slide={false}>
            {testimonials.map((item, index) => (
              <Carousel.Item key={`testimonial-${index}`}>
                <div className="testimonial-content px-3">
                  <blockquote className="blockquote mb-3">
                    <p className="fs-5 fw-light fst-italic transition-opacity">“{item.text}”</p>
                  </blockquote>
                  <div className="mt-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaHeart key={i} color="#ff4d6d" className="me-1 animated-heart" style={{ animationDelay: `${i * 0.2}s` }}/>
                    ))}
                  </div>
                  <footer className="blockquote-footer mt-3">
                    <strong>{item.name}</strong>, <cite>{item.profession}</cite>
                  </footer>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;


// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaHeart } from "react-icons/fa";

// const testimonials = [
//   {
//     text: "Thank you for Skincare products from THILEO Natural Cosmetics, at very affordable prices, the products are very satisfying. I used PRO DUST herbal bath powder Nalangu maavu twice a week on my 4 years old daughter — good improvement in skin tone. Thanks for recommending this product for me.",
//     name: "Anu .V",
//     profession: "PRO Makeup Trainer",
//     rating: 5,
//   },
//   {
//     text: "Since 2yrs my skin was full of pimples and acne scars. By using THILEO face wash there is an amazing result I had seen in my face... and more products I had been used, their products shown an amazing result.... thank u THILEO ❤️",
//     name: "Malar Sathiyamoorthi",
//     profession: "Student",
//     rating: 5,
//   },
//   {
//     text: "EXCELLENT SERVICE RENDERED AND WOULD LIKE TO VISIT AGAIN. THE QUALITY OF BEAUTY PRODUCTS ARE AFFORDABLE AND WORTH. IT SEEMS UNIQUE COMPARED TO OTHER AVAILABLE MARKET PRODUCTS.",
//     name: "Jayapal Raj",
//     profession: "Interior Designer",
//     rating: 5,
//   },
// ];

// const TestimonialSlider = () => {
//   return (
//     <section className="py-5 bg-light" id="testimonials">
//       <div className="container text-center">
//         <h2 className="mb-2">Words from Our Delighted <span className="text-primary">PRECIOUS</span> Customers</h2>
//         <p className="text-muted mb-4">They say it better than we do.</p>

//         <Carousel fade indicators={false} controls={true} interval={5000}>
//           {testimonials.map((item, index) => (
//             <Carousel.Item key={index}>
//               <div className="mx-auto" style={{ maxWidth: "800px" }}>
//                 <blockquote className="blockquote">
//                   <p className="fs-5 fw-light fst-italic">“{item.text}”</p>
//                 </blockquote>
//                 <div className="mt-3">
//                   {[...Array(item.rating)].map((_, i) => (
//                     <FaHeart key={i} color="#ff4d6d" className="me-1" />
//                   ))}
//                 </div>
//                 <footer className="blockquote-footer mt-3">
//                   <strong>{item.name}</strong>, <cite title="Source Title">{item.profession}</cite>
//                 </footer>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSlider;
