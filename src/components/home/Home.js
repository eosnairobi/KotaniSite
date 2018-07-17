import React, { Component } from "react";
import Welcome from "../welcome/Welcome";
import Service from "../Services/Service";
import Feature from "../features/Feature";
import ServiceArea from "../Services/ServiceArea";
import CTA from "../CTA/CTA";

class Home extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Service />
        <Feature />
        <ServiceArea />
        <CTA />
      </div>
    );
  }
}

export default Home;
