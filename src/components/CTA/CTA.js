import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div>
      <section
        class="mosh-call-to-action-area bg-img bg-overlay section_padding_100"
        style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="cta-content text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div class="section-heading">
                  <p>give us a shout</p>
                  <h2>Are you Ready to have a Talk?</h2>
                  <Link to="contact.html" class="btn mosh-btn">
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
