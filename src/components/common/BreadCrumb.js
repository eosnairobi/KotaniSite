import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = ({ title, description }) => {
  return (
    <div
      class="mosh-breadcumb-area"
      style={{ backgroundImage: "url(img/core-img/breadcumb.png)" }}
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="bradcumbContent">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {description}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Breadcrumb.defaultProps = {
  title: "title",
  description: "description info"
};
export default Breadcrumb;
