import React, { Component } from "react"

export class Picture extends Component {
  render() {
    const pictureStyle = {
      width: "100px",
      height: "100px",
      zIndex: "1000"
    }
    return (
      <div id="static" data-name={this.props.name}
      >
        <img 
          src={this.props.image}
          id="static" data-name={this.props.name}
          draggable="true"
          style={pictureStyle}
          onDragStart={this.props.handleDragStart}
          onClick={this.props.onClick}
          alt={"plant"}
        />
      </div>

    )
  }
}
