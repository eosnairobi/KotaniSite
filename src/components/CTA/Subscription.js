import React, { Component } from "react";

class Subscription extends Component {
  render() {
    return (
      <section
        class="mosh-subscribe-newsletter-area bg-img bg-overlay-white section_padding_100"
        style={{ backgroundImage: "url(img/bg-img/sub-1.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="subscribe-newsletter-content text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <p>give us a shout</p>
                <h2>Subscribe to our newsletter</h2>
                <form>
                  <input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Your e-mail here"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscription;
