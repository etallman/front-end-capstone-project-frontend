import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import picture from "./Images/Header.png"

const styles = {
    cardPosition: {
        margin: "30px",
        padding: "20px"
    }
};

export class TreeCards extends Component {
    render() {
        const { trees, error } = this.props;
        return (
            <React.Fragment>
                <Header as="h2" color="grey" textAlign="center" className="search">Tree Search</Header>
                <Image src={picture} size="large" centered />
                <Card.Group>
                    {trees.map((tree, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={tree.name}
                            className="tree-card"
                        >
                            <Card.Content>
                                <h2>{tree.name}</h2>
                                <br />
                                <img src={tree.image} className="thumbnail" />

                                <br />
                                <Modal
                                    size={"small"}
                                    trigger={<Button className="more-info">Read More</Button>}
                                    closeIcon
                                    style={{ marginTop: "20px" }}
                                >
                                    <Modal.Header>{tree.name}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={tree.image} />
                                        <Modal.Description>
                                            <p>Name: <i>{tree.name}</i></p>
                                            <p>Size: {tree.height}</p>
                                            <p>Description: {tree.description}</p>
                                            <p>State(s): {tree.states}</p>
                                            <a href={tree.site} target="_blank">
                                                Research more about the {tree.name} </a>
                                            <br></br>
                                            <br></br>
                                            <Button basic color='green' href={tree.amazon} target="_blank">
                                                Click to buy from Amazon </Button>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </React.Fragment>
        );
    }
}