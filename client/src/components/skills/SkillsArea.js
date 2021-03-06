import React from "react";

const SkillArea = () => {
  return (
    <section className="service-skills-area section_padding_100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6">
                <div
                  className="single-pie-bar text-center mb-100"
                  data-percent="75"
                >
                  <canvas className="bar-circle" width="70" height="70" />
                  <h6>Awesome</h6>
                  <p>Etiam nec odio</p>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="single-pie-bar text-center mb-100"
                  data-percent="83"
                >
                  <canvas className="bar-circle" width="70" height="70" />
                  <h6>Creative</h6>
                  <p>Etiam nec odio</p>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="single-pie-bar text-center mb-100"
                  data-percent="25"
                >
                  <canvas className="bar-circle" width="70" height="70" />
                  <h6>Lazy</h6>
                  <p>Etiam nec odio</p>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="single-pie-bar text-center mb-100"
                  data-percent="75"
                >
                  <canvas className="bar-circle" width="70" height="70" />
                  <h6>Outstanding</h6>
                  <p>Etiam nec odio</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="service-skills-content">
              <div className="section-heading">
                <p>Features</p>
                <h2>What you get if you start your business with us</h2>
              </div>
              <div className="skills-text d-flex">
                <p>
                  Etiam nec odio vestibulum est mattis effic iturut magna.
                  Pellentesque sit am et tellus blandit. Etiam nec odio
                  vestibul. Etiam nec odio vestibulum est mat tis effic iturut
                  magna. Pellentesque sit amet tellus blandit. Etiam nec odio
                  ves tibul. Nec odio vestibulum est mattis effic iturut magna.
                  Pellente sque sita met tellus blandit.
                </p>
                <p>
                  Pellentesque sit am et tellus blandit. Etiam nec odio
                  vestibul. Etiam nec odio vestibulum est mat tis effic iturut
                  magna. Pellentesque sit amet tellus blandit. Etiam nec odio
                  ves tibul. Nec odio vestibulum est mattis effic iturut magna.
                  Pellente sque sita met tellus blandit. Etiam nec odio. Etiam
                  nec odio vestibulum est mattis effic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillArea;
