import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <header className="header_area clearfix">
        <div className="container-fluid h-100">
          <div className="row h-100">
            {/* <!-- Menu Area Start --> */}
            <div className="col-12 h-100">
              <div className="menu_area h-100">
                <nav className="navbar h-100 navbar-expand-lg align-items-center">
                  {/* <!-- Logo --> */}
                  <Link className="navbar-brand" to="/">
                    {/* <img src="img/core-img/logo.png" alt="logo" /> */}
                    <h3>kotani</h3>
                  </Link>

                  {/* <!-- Menu Area --> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mosh-navbar"
                    aria-controls="mosh-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>

                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="mosh-navbar"
                  >
                    <ul className="navbar-nav animated" id="nav">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/services">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div class="login-register-btn">
                      <a href="#">Login</a>
                      <a href="#">/ Register</a>
                    </div>
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
