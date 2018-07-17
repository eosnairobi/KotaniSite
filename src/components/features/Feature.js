import React, { Component } from "react";

class Feature extends Component {
  render() {
    return (
      <section class="mosh-features-area section_padding_100 clearfix">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-12 col-md-6">
              <div class="section-heading">
                <p>clients</p>
                <h2>What you get if you start your business with us</h2>
              </div>
              <div class="features-content">
                <p>
                  Etiam nec odio vestibulum est mattis effic iturut magna.
                  Pellentesque sit am et tellus blandit. Etiam nec odio
                  vestibul. Etiam nec odio vestibulum est mat tis effic iturut
                  magna. Pellentesque sit amet tellus blandit. Etiam nec odio
                  ves tibul. Nec odio vestibulum est mattis effic iturut magna.
                  Pellente sque sita met tellus blandit. Etiam nec odio.
                </p>
                {/* <!-- Progress Bar Content Area --> */}
                <div class="features-progress-bar mt-50">
                  {/* <!-- Single Progress Bar --> */}
                  <div
                    class="single_progress_bar mb-15 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <p>Development</p>
                    <div id="bar1" class="barfiller">
                      <div class="tipWrap">
                        <span class="tip" />
                      </div>
                      <span class="fill" data-percentage="70" />
                    </div>
                  </div>
                  {/* <!-- Single Progress Bar --> */}
                  <div
                    class="single_progress_bar mb-15 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <p>Design</p>
                    <div id="bar2" class="barfiller">
                      <div class="tipWrap">
                        <span class="tip" />
                      </div>
                      <span class="fill" data-percentage="90" />
                    </div>
                  </div>
                  {/* <!-- Single Progress Bar --> */}
                  <div
                    class="single_progress_bar mb-15 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <p>SEO</p>
                    <div id="bar3" class="barfiller">
                      <div class="tipWrap">
                        <span class="tip" />
                      </div>
                      <span class="fill" data-percentage="55" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature Thumb --> */}
        <div class="features-img">
          <img src="img/bg-img/features.png" alt="" />
        </div>
      </section>
    );
  }
}

export default Feature;
