
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

export class ShrubCards extends Component {
    render() {
        const { shrubs } = this.props;
        return (
            <React.Fragment>
                <Header as="h2" color="grey" textAlign="center" className="search">Shrub Search</Header>
                <Image src={picture} size="large" centered />
                <Card.Group centered>
                    {shrubs.map((shrub, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={shrub.name}
                            className="flower-card"
                        >
                            <Card.Content>
                                <h2>{shrub.name}</h2>
                                <br />
                                <img src={shrub.image} className="thumbnail" alt={"shrub"}/>

                                <br />
                                <Modal
                                    size={"small"}
                                    trigger={<Button className="more-info" style={styles.cardButtons}>Read More</Button>}
                                    closeIcon
                                    style={{ height: 'initial', top: "initial", left: 'initial' }}
                                >
                                    <Modal.Header>{shrub.name}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={shrub.image} />
                                        <Modal.Description>
                                            <p>Name: <i>{shrub.name}</i></p>
                                            <p>Size: {shrub.height}</p>
                                            <p>Description: {shrub.description}</p>
                                            <p>State(s): {shrub.states}</p>
                                            <a href={shrub.site} target="_blank" rel="noopener noreferrer">
                                                Research more about the {shrub.name} </a>
                                            <br></br>
                                            <br></br>
                                            <Button basic color='green' href={shrub.amazon} target="_blank">
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