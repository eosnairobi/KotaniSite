import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Service.css";

class Service extends Component {
  render() {
    return (
      <section class="mosh-service-area clearfix">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="mosh-service-slides owl-carousel">
                {/* <!-- Single Service Area --> */}
                <div class="single-service-area text-center">
                  <h2>01.</h2>
                  <h4>No1 in Sales!</h4>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit am et tellus blandit. Etiam nec odio
                    vestibul.
                  </p>
                </div>
                {/* <!-- Single Service Area --> */}
                <div class="single-service-area text-center">
                  <h2>02.</h2>
                  <h4>Online Marketing</h4>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit am et tellus blandit. Etiam nec odio
                    vestibul.
                  </p>
                </div>
                {/* <!-- Single Service Area --> */}
                <div class="single-service-area text-center">
                  <h2>03.</h2>
                  <h4>Modern Design</h4>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit am et tellus blandit. Etiam nec odio
                    vestibul.
                  </p>
                </div>
                {/* <!-- Single Service Area --> */}
                <div class="single-service-area text-center">
                  <h2>04.</h2>
                  <h4>No1 in Sales!</h4>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit am et tellus blandit. Etiam nec odio
                    vestibul.
                  </p>
                </div>
                {/* <!-- Single Service Area --> */}
                <div class="single-service-area text-center">
                  <h2>05.</h2>
                  <h4>Online Marketing</h4>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit am et tellus blandit. Etiam nec odio
                    vestibul.
                  </p>
                </div>
                {/* <!-- Single Service Area --> */}
                <div class="single-service-area text-center">
                  <h2>06.</h2>
                  <h4>Modern Design</h4>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit am et tellus blandit. Etiam nec odio
                    vestibul.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Discover More btn --> */}
            <div class="col-12 text-center mt-100">
              <Link to="#" class="btn mosh-btn">
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
