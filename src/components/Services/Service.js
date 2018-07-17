import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";

import "./Service.css";

class Service extends Component {
  render() {
    return (
      <section className="mosh-service-area clearfix">
        <div className="container">
          <div className="row" style={{ marginBottom: "1rem" }}>
            <div className="col-12">
              <div className="mosh-service-slides">
                <Carousel
                  dragging={true}
                  autoplay={true}
                  slideWidth={0.33}
                  cellAlign="center"
                >
                  {/* <!-- Single Service Area --> */}
                  <div className="single-service-area text-center">
                    <h2>01.</h2>
                    <h4>No1 in Sales!</h4>
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am et tellus blandit. Etiam nec odio
                      vestibul.
                    </p>
                  </div>
                  {/* <!-- Single Service Area --> */}
                  <div className="single-service-area text-center">
                    <h2>02.</h2>
                    <h4>Online Marketing</h4>
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am et tellus blandit. Etiam nec odio
                      vestibul.
                    </p>
                  </div>
                  {/* <!-- Single Service Area --> */}
                  <div className="single-service-area text-center">
                    <h2>03.</h2>
                    <h4>Modern Design</h4>
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am et tellus blandit. Etiam nec odio
                      vestibul.
                    </p>
                  </div>
                  {/* <!-- Single Service Area --> */}
                  <div className="single-service-area text-center">
                    <h2>04.</h2>
                    <h4>No1 in Sales!</h4>
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am et tellus blandit. Etiam nec odio
                      vestibul.
                    </p>
                  </div>
                  {/* <!-- Single Service Area --> */}
                  <div className="single-service-area text-center">
                    <h2>05.</h2>
                    <h4>Online Marketing</h4>
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am et tellus blandit. Etiam nec odio
                      vestibul.
                    </p>
                  </div>
                  {/* <!-- Single Service Area --> */}
                  <div className="single-service-area text-center">
                    <h2>06.</h2>
                    <h4>Modern Design</h4>
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit am et tellus blandit. Etiam nec odio
                      vestibul.
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
            {/* <!-- Discover More btn --> */}
            <div className="col-12 text-center mt-100">
              <Link to="#" className="btn mosh-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
