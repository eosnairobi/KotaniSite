import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area clearfix">
      {/* <!-- Top Fotter Area --> */}
      <div className="top-footer-area section_padding_100_0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget mb-100">
                <Link to="/" className="mb-50 d-block">
                  <h3>Kotani</h3>
                </Link>
                <p>
                  The Secret of Success… …is in building great partnerships. We
                  are constantly working together with a broad range of partners
                  each specialised in a field of their strength.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget mb-100">
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
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget mb-100">
                <h5>Contact Info</h5>
                <div className="footer-single-contact-info d-flex">
                  <div className="contact-icon">
                    <img src="img/core-img/map.png" alt="" />
                  </div>
                  <p>104 Lower Kabete Rrd, Nairobi.</p>
                </div>
                <div className="footer-single-contact-info d-flex">
                  <div className="contact-icon">
                    <img src="img/core-img/call.png" alt="" />
                  </div>
                  <p>
                    Main: +254 702-845-341 <br /> Office: +254 702-845-341
                  </p>
                </div>
                <div className="footer-single-contact-info d-flex">
                  <div className="contact-icon">
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
      <div className="footer-bottom-area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100">
              <div className="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">
                <div className="copyright-text">
                  <p>
                    Copyright &copy;<script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | Made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </p>
                </div>
                <div className="footer-social-info">
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
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
