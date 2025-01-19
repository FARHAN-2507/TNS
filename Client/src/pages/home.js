import React from 'react';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import owner from '../assets/owner.jpg';
function Home() {
  return (
    <div>
      {/* Fix for Sticky Navbar Cutting Content */}
      <div style={{ marginTop: '70px' }}></div>

      {/* Image Slider */}
      <div id="imageSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src={b1}
              className="d-block w-100" 
              alt="Salon Hair Styling" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src={b2}
              className="d-block w-100" 
              alt="Spa Services" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src={b3} 
              className="d-block w-100" 
              alt="Makeup and Skincare" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src={b4} 
              className="d-block w-100" 
              alt="Makeup and Skincare" 
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        
    
      {/* Full-Size Banner */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <i className="bi bi-award fs-1 text-primary"></i>
              <h5 className="mt-3">5+ Awards</h5>
            </div>
            <div className="col-md-4">
              <i className="bi bi-patch-check fs-1 text-success"></i>
              <h5 className="mt-3">10+ Certifications</h5>
            </div>
            <div className="col-md-4">
              <i className="bi bi-hourglass-split fs-1 text-warning"></i>
              <h5 className="mt-3">Decade of Experience</h5>
            </div>
          </div>
        </div>
      </div>

      {/* About the Owner */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>About the Owner</h3>
            <p>
              Meet the visionary behind our salon. With years of experience and
              a passion for beauty, our founder has created a place where every
              client feels special and valued.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img 
              src={owner} 
              alt="Owner" 
              className="rounded-circle img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p>
                    <i className="bi bi-chat-quote text-primary me-2"></i>
                    This salon is amazing! The staff is friendly, and the
                    services are exceptional.
                  </p>
                  <small className="text-muted">- Jane Doe</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p>
                    <i className="bi bi-chat-quote text-primary me-2"></i>
                    I’ve never felt more confident in my look. Highly
                    recommend!
                  </p>
                  <small className="text-muted">- John Smith</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p>
                    <i className="bi bi-chat-quote text-primary me-2"></i>
                    Excellent services and a very comfortable environment.
                  </p>
                  <small className="text-muted">- Sarah Lee</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
