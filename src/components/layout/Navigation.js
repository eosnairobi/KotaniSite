import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <header class="header_area clearfix">
        <div class="container-fluid h-100">
          <div class="row h-100">
            {/* <!-- Menu Area Start --> */}
            <div class="col-12 h-100">
              <div class="menu_area h-100">
                <nav class="navbar h-100 navbar-expand-lg align-items-center">
                  {/* <!-- Logo --> */}
                  <Link class="navbar-brand" to="/">
                    {/* <img src="img/core-img/logo.png" alt="logo" /> */}
                    <h3>kotani</h3>
                  </Link>

                  {/* <!-- Menu Area --> */}
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mosh-navbar"
                    aria-controls="mosh-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon" />
                  </button>

                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="mosh-navbar"
                  >
                    <ul class="navbar-nav animated" id="nav">
                      <li class="nav-item active">
                        <Link class="nav-link" to="/">
                          Home
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link class="nav-link" to="/about">
                          About Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/services">
                          Services
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;
