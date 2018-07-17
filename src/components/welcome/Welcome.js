import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <section
        class="welcome_area clearfix"
        id="home"
        style={{ backgroundImage: "url(img/bg-img/welcome-bg.png)" }}
      >
        <div class="hero-slides owl-carousel">
          {/* <!-- Single Hero Slides --> */}
          <div class="single-hero-slide d-flex align-items-end justify-content-center">
            <div class="hero-slide-content text-center">
              <h2>Kotani Block Producer Candidate</h2>
              <h4>Building solutions for Africa using the EOS Blockchain</h4>
              <img class="slide-img" src="img/bg-img/device.png" alt="device" />
            </div>
          </div>
          {/* <!-- Single Hero Slides --> */}
          <div class="single-hero-slide d-flex align-items-end justify-content-center">
            <div class="hero-slide-content text-center">
              <h2>Kotani Block Producer Candidate</h2>
              <h4>Building solutions for Africa using the EOS Blockchain</h4>
              <img class="slide-img" src="img/bg-img/device.png" alt="device" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
