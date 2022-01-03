import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <>
        <div className="head h-40 bg-gray-300 flex justify-between rounded-b-[80px]">
          <div className="icon mx-20 my-10 text-lg">
            <button>
              <FaBars />
            </button>
          </div>
          <div className="name mx-24 my-10">
            <h4 className="font-mono">bernos</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
