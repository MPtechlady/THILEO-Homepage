import React, { useState, useRef } from "react";
import updatesData from "../data/updates";
import "../styles/UpdatesSection.css";

const UpdatesSection = () => {
    const [category, setCategory] = useState("All");
    const scrollContainerRef = useRef(null);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to midnight

    const filteredUpdates = updatesData.filter((update) => {
        const updateDate = new Date(update.date);
        updateDate.setHours(0, 0, 0, 0); // Normalize update date too
        return updateDate >= today && (category === "All" || update.category === category);
    });

    const categories = ["All", "New Launch", "Offer", "Restock", "Event", "Announcement"];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const cardWidth = 300; // fixed width
            const gap = 20;
            let scrollAmount;

            if (window.innerWidth >= 992) {
                scrollAmount = (cardWidth + gap) * 3; // 3 cards
            } else if (window.innerWidth >= 768) {
                scrollAmount = (cardWidth + gap) * 2; // 2 cards
            } else {
                scrollAmount = (cardWidth + gap) * 1; // 1 card
            }

            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };
          
    return (
        <section className="updates-section py-5 mb-4">
            <div className="container h-100 mb-5">
                <h2 className="text-center mb-4">Latest Updates</h2>

                <div className="d-flex justify-content-center mb-3 flex-wrap">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`btn btn-sm mx-1 mb-2 ${cat === category ? "btn-success" : "btn-outline-success"}`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                    ))}
                </div>
                
                <div className="updates-carousel-wrapper">
                    <button
                        className="btn btn-outline-secondary left-arrow"
                        onClick={() => scroll("left")}
                    >
                        &#8592;
                    </button>

                    <div className="d-flex mx-2" id="updates-scroll" ref={scrollContainerRef}>
                        {filteredUpdates.length > 0 ? (
                            filteredUpdates.map((update) => (
                                <div className="card update-card" key={update.id}>
                                    <img
                                        src={update.image || "/fallback.jpg"}
                                        className="card-img-top"
                                        alt={update.altText || "Update image"}
                                        onError={(e) => (e.target.src = "/fallback.jpg")}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{update.title}</h5>
                                        <p className="card-text">{update.shortDescription}</p>
                                        <small className="text-muted">{update.date}</small>
                                        <div>
                                            <button className="btn btn-sm btn-success mt-2">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center w-100">No current updates.</p>
                        )}
                    </div>

                    <button
                        className="btn btn-outline-secondary right-arrow"
                        onClick={() => scroll("right")}
                    >
                        &#8594;
                    </button>
                </div>


            </div>
        </section>
    );
};

export default UpdatesSection;
    
     // const scroll = (direction) => {
    //     const container = document.getElementById("updates-scroll");
    //     const scrollAmount = container.offsetWidth;
    //     direction === "left"
    //         ? container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    //         : container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollBy({
    //             left: direction === "left" ? -300 : 300, 
    //             behavior: "smooth",
    //         });
    //     }
    // };

    {/* position-absolute start-0 top-50 translate-middle-y 
                    position-absolute end-0 top-50 translate-middle-y*/}

// const scroll = (direction) => {
//         const container = scrollContainerRef.current;
//         if (container) {
//           const cardWidth = 300; // fixed card width
//           const gap = 20;
      
//           let cardsPerSet = 1; // default small screen
//           if (window.innerWidth >= 992) {
//             cardsPerSet = 3; // large
//           } else if (window.innerWidth >= 768) {
//             cardsPerSet = 2; // medium
//           }
      
//           const setWidth = (cardWidth + gap) * cardsPerSet;
//           const currentScroll = container.scrollLeft;
      
//           let targetScroll;
      
//           if (direction === "right") {
//             // Scroll to the next set start: 
//             // Round up current scroll to nearest multiple of setWidth + setWidth
//             targetScroll = Math.ceil(currentScroll / setWidth) * setWidth;
//           } else {
//             // Scroll to the previous set start: 
//             // Round down current scroll to nearest multiple of setWidth - setWidth
//             targetScroll = Math.floor(currentScroll / setWidth) * setWidth - setWidth;
//             if (targetScroll < 0) targetScroll = 0; // prevent negative scroll
//           }
      
//           container.scrollTo({
//             left: targetScroll,
//             behavior: "smooth",
//           });
//         }
//       };