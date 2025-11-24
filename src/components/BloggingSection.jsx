import React from "react";
import blogsData from "../data/blogsData";
import "../styles/BloggingSection.css";

const BloggingSection = () => {
  return (
    <section className="blogging-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Explore Our Natural Beauty</h2>
        <div className="row">
          {blogsData.map((blog) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={blog.id}>
              <div className="card h-100">
                <img
                  src={blog.image || "/fallback.jpg"}
                  className="card-img-top"
                  alt={blog.altText || "Blog image"}
                  onError={(e) => (e.target.src = "/fallback.jpg")}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <small className="text-muted mb-2">{blog.date}</small>
                  <p className="card-text">{blog.shortDescription}</p>
                  <a href="#" className="btn btn-outline-success mt-auto">
                    <b>Read More</b>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BloggingSection;
