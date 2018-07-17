import React, { Component } from "react";
import Carousel from "nuka-carousel";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <section
        class="welcome_area clearfix"
        id="home"
        style={{ backgroundImage: "url(img/bg-img/welcome-bg.png)" }}
      >
        <div class="">
          <Carousel dragging={true} autoplay={true}>
            <div class="single-hero-slide d-flex align-items-end justify-content-center">
              <div class="hero-slide-content text-center">
                <h2>Kotani Block Producer Candidate</h2>
                <h4>Building solutions for Africa using the EOS Blockchain</h4>
                <img
                  class="slide-img"
                  src="img/bg-img/device.png"
                  alt="device"
                />
              </div>
            </div>
            <div class="single-hero-slide d-flex align-items-end justify-content-center">
              <div class="hero-slide-content text-center">
                <h2>Kotani Block Producer Candidate</h2>
                <h4>Building solutions for Africa using the EOS Blockchain</h4>
                <img
                  class="slide-img"
                  src="img/bg-img/device.png"
                  alt="device"
                />
              </div>
            </div>
            <div class="single-hero-slide d-flex align-items-end justify-content-center">
              <div class="hero-slide-content text-center">
                <h2>Kotani Block Producer Candidate</h2>
                <h4>Building solutions for Africa using the EOS Blockchain</h4>
                <img
                  class="slide-img"
                  src="img/bg-img/device.png"
                  alt="device"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Welcome;
