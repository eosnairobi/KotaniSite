import React, { Component } from "react";
import Breadcrumb from "../common/BreadCrumb";
import Subscription from "../CTA/Subscription";

class About extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title="About us" description="Read Our History" />
        <section className="mosh-aboutUs-area section_padding_100_0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="mosh-about-us-content">
                  <div className="section-heading">
                    <p>Features</p>
                    <h2>What you get if you start your business with us</h2>
                  </div>
                  <p>
                    Based in Nairobi Kenya (East Africa), Kotani is a strong and
                    vibrant community made up of individuals with different
                    backgrounds who believe that blockchain technology will
                    drive the future. A future where tools of wealth creation
                    are decentralized and accessible to many, a future of
                    transparency and accountability, a future where individuals
                    and groups can participate in making the world a better
                    place on an incentivized platform.
                  </p>
                  <a href="#" className="btn mosh-btn mt-50">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="mosh-about-us-thumb wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img src="img/bg-img/headpiece.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mosh-about-features-area section_padding_100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-4">
                <div
                  className="mosh-features-thumb wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <img src="img/bg-img/features-2.png" alt="" />
                </div>
              </div>

              <div className="col-12 col-md-8">
                <div className="mosh-about-us-content">
                  <div className="section-heading">
                    <p>Features</p>
                    <h2>Fun facts about the team and why people love us</h2>
                  </div>
                  <div className="row">
                    {/* <!-- Single Feature Area --> */}
                    <div className="col-12 col-sm-6">
                      <div className="single-feature-area d-flex">
                        <div className="feature-icon mr-30">
                          <img src="img/core-img/settings-2.png" alt="" />
                        </div>
                        <div className="feature-content">
                          <h5>A big team</h5>
                          <p>
                            Our team of highly skilled programmers, software and
                            hardware engineers, strategists and business
                            developers are here to make EOS enhance the
                            processes in the market today.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Feature Area --> */}
                    <div className="col-12 col-sm-6">
                      <div className="single-feature-area d-flex">
                        <div className="feature-icon mr-30">
                          <img src="img/core-img/photo-camera.png" alt="" />
                        </div>
                        <div className="feature-content">
                          <h5>INCUBATOR</h5>
                          <p>
                            We aim to use all the EOS to develop the community
                            by supporting dAPPs built on and for EOS
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Feature Area --> */}
                    <div className="col-12 col-sm-6">
                      <div className="single-feature-area d-flex">
                        <div className="feature-icon mr-30">
                          <img src="img/core-img/like.png" alt="" />
                        </div>
                        <div className="feature-content">
                          <h5>Community</h5>
                          <p>
                            We are comprised of over 200 EOS enthusiasts from a
                            broad range of socio-economic backgrounds working
                            together to find solutions to problems in Africa.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Feature Area --> */}
                    <div className="col-12 col-sm-6">
                      <div className="single-feature-area d-flex">
                        <div className="feature-icon mr-30">
                          <img src="img/core-img/gamepad.png" alt="" />
                        </div>
                        <div className="feature-content">
                          <h5>BUILDING A LOYAL COMMUNITY</h5>
                          <p>
                            Weekly Wednesday research teams and Developer
                            Classes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <a href="#" className="btn mosh-btn mt-50">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="few-words-from-ceo d-md-flex">
          <div
            className="few-words-contents d-flex align-items-center justify-content-center wow fadeInLeftBig"
            data-wow-delay="0.1s"
          >
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-md-11 col-lg-9 col-xl-7">
                  <div className="few-words-text">
                    <div className="section-heading">
                      <p>Features</p>
                      <h2>
                        Fun facts about the team and why people love us and WHY
                        WE ARE HERE
                      </h2>
                    </div>
                    <p>
                      Kotani is a strong and vibrant community made up of
                      individuals with different backgrounds who believe that
                      blockchain technology will drive the future. A future
                      where tools of wealth creation are decentralized and
                      accessible to many, a future of transparency and
                      accountability, a future where individuals and groups can
                      participate in making the world a better place on an
                      incentivized platform.
                    </p>
                    {/* <div className="ceo-meta-data d-flex align-items-center mt-50">
                      <div
                        className="ceo-thumb bg-img"
                        style={{ backgroundImage: "url(img/bg-img/ceo.jpg)" }}
                      />
                      <div className="ceo-name">
                        <h6>Jim Morison</h6>
                        <p>Company CEO</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="few-words-thumb bg-img wow fadeInRightBig"
            data-wow-delay="1.1s"
            style={{ backgroundImage: "url(img/bg-img/cta-2.jpg)" }}
          />
        </section>
        <Subscription />
      </div>
    );
  }
}

export default About;
