import React from "react";
import Aboutus from "../AboutUS/Aboutus";
import MiddleHome from "../MiddleHome/MiddleHome";
import Tophome from "../TopHome/Tophome";

function Homepage() {
  return (
    <div>
      <Tophome />
      <MiddleHome />
      <hr />
      <Aboutus />
    </div>
  );
}

export default Homepage;
