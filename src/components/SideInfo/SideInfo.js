import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";

export class SideInfo extends Component {
  render() {
    const flower = this.props.currentFlower;
    return (
      <React.Fragment>
        {flower !== null && flower.type === "flower" ? (
          <Card className="sideInfo" style={{ marginTop: "25px" }}>
            <Image src={flower.image} draggable="false"/>
            <Card.Content>
              <Card.Header>{flower.name}</Card.Header>

              <Card.Description>
                <p>
                  Blooms: {flower.blooms} ({flower.blooms})
                </p>
                <p>Size: {flower.size}</p>
                <p>Needs: {flower.sun}</p>
                <p>Color(s): {flower.color}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        ) : (flower!==null && flower.type==="veggie"?(
          <Card className="sideInfo" style={{ marginTop: "25px" }}>
            <Image src={flower.image} draggable="false"/>
            <Card.Content>
              <Card.Header>{flower.name}</Card.Header>

              <Card.Description>
                <p>Seed: {flower.start}</p>
                <p>Needs: {flower.sun}</p>
                <p>Days to harvest: {flower.days}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        ):(flower!==null && flower.type==="tree"?(
              <Card className="sideInfo" style={{ marginTop: "25px" }}>
                <Image src={flower.image} draggable="false"/>
                <Card.Content>
                  <Card.Header>{flower.name}</Card.Header>

                  <Card.Description>
                    <p>Height: {flower.height}</p>
                    <p>Description: {flower.description}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
        ):( flower!==null?(
                <Card className="sideInfo" style={{ marginTop: "25px" }}>
                  <Image src={flower.image} draggable="false"/>
                  <Card.Content>
                    <Card.Header>{flower.name}</Card.Header>

                    <Card.Description>
                      <p>Size: {flower.size}</p>
                      <p>Description: {flower.description}</p>
                      
                    </Card.Description>
                  </Card.Content>
                </Card>
        ):(null)
        )

        )
        )}
      </React.Fragment>
    );
  }
}
function mapStatetoProps(state) {
  return { currentFlower: state.flowers.currentFlower };
}
export default connect(mapStatetoProps)(SideInfo);
