import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import picture from "../Images/Header.png"

const styles = {
    cardPosition: {
        margin: "30px",
        padding: "20px"
    },
    cardButtons: {
        backgroundColor: '#78A9BB',
        color: 'white'
    }
};

export class TreeCards extends Component {
    render() {
        const { trees } = this.props;
        return (
            <React.Fragment>
                <Header as="h2" color="grey" textAlign="center" className="search">Tree Search</Header>
                <Image src={picture} size="large" centered />
                <Card.Group centered >
                    {trees.map((tree, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={tree.name}
                            className="flower-card"
                        >
                            <Card.Content centered>
                                <h2>{tree.name}</h2>
                                <br />
                                <img src={tree.image} className="thumbnail" alt={"tree"}/>

                                <br />
                                <Modal
                                    size={"small"}
                                    trigger={<Button className="more-info" style={styles.cardButtons}>Read More</Button>}
                                    closeIcon
                                    style={{ height: 'initial', top: "initial", left: 'initial' }}
                                >
                                    <Modal.Header>{tree.name}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={tree.image} />
                                        <Modal.Description>
                                            <p>Name: <i>{tree.name}</i></p>
                                            <p>Size: {tree.height}</p>
                                            <p>Description: {tree.description}</p>
                                            <p>State(s): {tree.states}</p>
                                            <a href={tree.site} target="_blank" rel="noopener noreferrer">
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
