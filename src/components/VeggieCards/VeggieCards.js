import React, { Component } from "react"
import { Button, Header, Image, Modal, Card } from "semantic-ui-react"
import picture from "../Images/Header.png"

const styles = {
  cardPosition: {
    margin: "30px",
    padding: "20px"
  },
  cardButtons: {
    backgroundColor: "#78A9BB",
    color: "white"
  }
}

export class VeggieCards extends Component {
  render() {
    const { veggies } = this.props
    return (
      <React.Fragment>
        <div />
        <Header color="grey" textAlign="center" style={{ fontSize: "30px" }}>
          Veggie Search
        </Header>
        <Image src={picture} size="large" centered />
        <Card.Group centered={true}>
          {veggies.map((veggie, i) => (
            <Card
              style={styles.cardPosition}
              key={veggie.name}
              className="flower-card"
            >
              <Card.Content centered>
                <h2>{veggie.name}</h2>
                <br />
                <img src={veggie.image} className="thumbnail" alt={"veggie"} />

                <br />
                <Modal
                  size={"small"}
                  trigger={
                    <Button style={styles.cardButtons}>Read More</Button>
                  }
                  closeIcon
                  style={{ height: "initial", top: "initial", left: "initial" }}
                >
                  <Modal.Header>{veggie.name}</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size="huge" src={veggie.image} />
                    <Modal.Description>
                      <Header>{veggie.name}</Header>
                      <p>
                        Name: <i>{veggie.name}</i>
                      </p>
                      <p>Starts with: {veggie.start}</p>
                      <p>Sun: {veggie.sun}</p>
                      <p>Days to harvest: {veggie.days}</p>
                      <p>Description: {veggie.description}</p>
                      <a href={veggie.site} target="_blank" rel="noopener noreferrer">
                        Click here to learn more about {veggie.name}!
                      </a>
                      <br />
                      <br />

                      <Button
                        basic
                        color="green"
                        href={veggie.amazon}
                        target="_blank"
                      >
                        Click to buy from Amazon{" "}
                      </Button>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </React.Fragment>
    )
  }
}
