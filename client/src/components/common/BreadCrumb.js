import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = ({ title, description }) => {
  return (
    <div
      className="mosh-breadcumb-area"
      style={{ backgroundImage: "url(img/core-img/breadcumb.png)" }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="bradcumbContent">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
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
