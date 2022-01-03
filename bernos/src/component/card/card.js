import { CardActionArea } from "@mui/material";
import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card font-mono flex flex-col justify-center items-center">
          <img src={this.props.url} className="img"></img>
          <p>{this.props.title}</p>
          <p>{this.props.sentence}</p>
        </div>
      </>
    );
  }
}

export default Card;
