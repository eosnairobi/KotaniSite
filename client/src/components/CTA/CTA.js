import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div>
      <section
        className="mosh-call-to-action-area bg-img bg-overlay section_padding_100"
        style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="cta-content text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="section-heading">
                  <p>give us a shout</p>
                  <h2>Are you Ready to have a Talk?</h2>
                  <Link to="contact.html" className="btn mosh-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
