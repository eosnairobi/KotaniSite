import React, { Component } from "react";
import Welcome from "../welcome/Welcome";
import Service from "../Services/Service";

class Home extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Service />
      </div>
    );
  }
}

export default Home;
