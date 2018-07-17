import React, { Component } from "react";
import Breadcrumb from "../common/BreadCrumb";
import Subscription from "../CTA/Subscription";
import SkillArea from "../skills/SkillsArea";

class Servicepage extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title="Services" description="What we offer." />
        <section className="mosh--services-area section_padding_100">
          <div className="container">
            <div className="row">
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/trophy.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>No1 in Sales!</h4>
                    <p>
                      Nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/edit.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Documentation inside</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/video-camera.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Modern Design</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/presentation.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Marketing Strategist</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/gamepad.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Play with colors</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/atomic.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Mix &amp; Match</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/safebox.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Worth the money</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/settings-2.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Modern elements</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Single Feature Area --> */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="single-feature-area d-flex mb-100">
                  <div className="feature-icon mr-30">
                    <img src="img/core-img/alarm-clock.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>24 Hours support</h4>
                    <p>
                      Etiam nec odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center">
                <a href="#" className="btn mosh-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <SkillArea />
        <Subscription />
      </div>
    );
  }
}

export default Servicepage;
