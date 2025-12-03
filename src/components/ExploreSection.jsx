import React from 'react';
import blog from '../data/blog';
import '../styles/ExploreSection.css'; // custom styles (optional)

const ExploreSection = () => {
  return (
    <section className="py-4 px-2 mt-5 mb-4 bg-white">
      <div className="container border rounded-3 p-3 shadow-sm">
      {/* <div className="container rounded-3 p-3"> */}
        {/* <h5 className="mb-4 fw-bold text-secondary border-bottom pb-2">Explore Natural Beauty</h5> */}
        <h5 className="section-title mb-4 border-bottom pb-2">Explore Natural Beauty</h5>
        <div className="row">
          {blog.map((blog, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="d-flex align-items-center justify-content-between border rounded-3 p-2 px-3 h-100 hover-card">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid card-img"
                    style={{ objectFit: 'contain' }}
                  />
                  <h6 className="mb-0 card-title">{blog.title}</h6>
                </div>
                <span className="text-pink fs-4 fw-bold">{'>'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
