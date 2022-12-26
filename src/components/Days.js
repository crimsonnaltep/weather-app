import React, { Component } from "react";
import "./Days.css";
class Days extends Component {
  state = {};
  render() {
    return (
      <div className="weatherBox">
        <h3>{this.props.dayName}</h3>
        <p>{this.props.date}</p>
        <img></img>
        <h1>{this.props.temp}</h1>
        <p>Clear sky</p>
      </div>
    );
  }
}

export default Days;
