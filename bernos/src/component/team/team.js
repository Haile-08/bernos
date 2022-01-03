import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <>
        <div className="card font-mono flex flex-col justify-center items-center my-20">
          <img src={this.props.url} className="img w-80 h-72" alt="" />
          <p>{this.props.title}</p>
          <p>{this.props.sentence}</p>
        </div>
      </>
    );
  }
}

export default Team;
