import React, { Component } from "react";
import Breadcrumb from "../common/BreadCrumb";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title="Contact Us" description="Say Hello." />
        <section className="contact-area section_padding_100">
          <div className="container">
            <div className="row">
              {/* <!-- Contact Form Area --> */}
              <div className="col-12 col-md-8">
                <div className="contact-form-area">
                  <h2>Get in touch</h2>
                  <form action="#">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        />
                      </div>
                      <button className="btn mosh-btn mt-50" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- Contact Information --> */}
              <div className="col-12 col-md-4">
                <div className="contact-information">
                  <h2>Contact</h2>
                  <div className="single-contact-info d-flex">
                    <div className="contact-icon mr-15">
                      <img src="img/core-img/map.png" alt="" />
                    </div>
                    <p>
                      104 Lower Kabete Rrd, <br /> Nairobi, Kenya
                    </p>
                  </div>
                  <div className="single-contact-info d-flex">
                    <div className="contact-icon mr-15">
                      <img src="img/core-img/call.png" alt="" />
                    </div>
                    <p>
                      Main: +254 702-845-341 <br /> Office: +254 702-845-341
                    </p>
                  </div>
                  <div className="single-contact-info d-flex">
                    <div className="contact-icon mr-15">
                      <img src="img/core-img/message.png" alt="" />
                    </div>
                    <p>blocks@eosnairobi.io</p>
                  </div>
                  <div className="contact-social-info mt-50">
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
        </section>
      </div>
    );
  }
}

export default ContactPage;
