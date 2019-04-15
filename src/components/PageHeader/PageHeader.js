import React, { Component } from "react"
import { Header, Image } from "semantic-ui-react"
import largeSucculent from "../Images/side.jpg"

export class PageHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          style={{
            fontSize: "100px",
            fontFamily: "Just Another Hand",
            color: "#78A9BB"
          }}
          textAlign="left"
        >
          <Image src={largeSucculent} style={{ height: "12%", width: "12%" }} />
          Flower Power
        </Header>
      </React.Fragment>
    )
  }
}

export default PageHeader
