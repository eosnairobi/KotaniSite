import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer-area clearfix">
      {/* <!-- Top Fotter Area --> */}
      <div class="top-footer-area section_padding_100_0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-footer-widget mb-100">
                <Link to="/" class="mb-50 d-block">
                  <h3>Kotani</h3>
                </Link>
                <p>
                  The Secret of Success… …is in building great partnerships. We
                  are constantly working together with a broad range of partners
                  each specialised in a field of their strength.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-footer-widget mb-100">
                <h5>Navigate to</h5>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/service">Services &amp; Features</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-footer-widget mb-100">
                <h5>Contact Info</h5>
                <div class="footer-single-contact-info d-flex">
                  <div class="contact-icon">
                    <img src="img/core-img/map.png" alt="" />
                  </div>
                  <p>104 Lower Kabete Rrd, Nairobi.</p>
                </div>
                <div class="footer-single-contact-info d-flex">
                  <div class="contact-icon">
                    <img src="img/core-img/call.png" alt="" />
                  </div>
                  <p>
                    Main: +254 702845341 <br /> Office: +254 702845341
                  </p>
                </div>
                <div class="footer-single-contact-info d-flex">
                  <div class="contact-icon">
                    <img src="img/core-img/message.png" alt="" />
                  </div>
                  <p>blocks@eosnairobi.io</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fotter Bottom Area --> */}
      <div class="footer-bottom-area">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-12 h-100">
              <div class="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">
                <div class="copyright-text">
                  <p>
                    Copyright &copy;<script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | Made with{" "}
                    <i class="fa fa-heart-o" aria-hidden="true" />
                  </p>
                </div>
                <div class="footer-social-info">
                  <a href="#">
                    <i class="fa fa-pinterest" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i class="fa fa-dribbble" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i class="fa fa-behance" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
