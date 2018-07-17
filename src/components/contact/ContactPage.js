import React, { Component } from "react";
import Breadcrumb from "../common/BreadCrumb";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title="Contact Us" description="Say Hello." />
        <section class="contact-area section_padding_100">
          <div class="container">
            <div class="row">
              {/* <!-- Contact Form Area --> */}
              <div class="col-12 col-md-8">
                <div class="contact-form-area">
                  <h2>Get in touch</h2>
                  <form action="#">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="E-mail"
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div class="col-12">
                        <textarea
                          name="message"
                          class="form-control"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        />
                      </div>
                      <button class="btn mosh-btn mt-50" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- Contact Information --> */}
              <div class="col-12 col-md-4">
                <div class="contact-information">
                  <h2>Contact</h2>
                  <div class="single-contact-info d-flex">
                    <div class="contact-icon mr-15">
                      <img src="img/core-img/map.png" alt="" />
                    </div>
                    <p>
                      104 Lower Kabete Rrd, <br /> Nairobi, Kenya
                    </p>
                  </div>
                  <div class="single-contact-info d-flex">
                    <div class="contact-icon mr-15">
                      <img src="img/core-img/call.png" alt="" />
                    </div>
                    <p>
                      Main: +254 702-845-341 <br /> Office: +254 702-845-341
                    </p>
                  </div>
                  <div class="single-contact-info d-flex">
                    <div class="contact-icon mr-15">
                      <img src="img/core-img/message.png" alt="" />
                    </div>
                    <p>blocks@eosnairobi.io</p>
                  </div>
                  <div class="contact-social-info mt-50">
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
        </section>
      </div>
    );
  }
}

export default ContactPage;
