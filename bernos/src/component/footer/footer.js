import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer flex flex-col justify-center items-center font-mono">
          <p>copyright@2021 bernosproduction |powered by</p>
          <p>bernosproduction</p>
        </div>
      </>
    );
  }
}

export default Footer;
