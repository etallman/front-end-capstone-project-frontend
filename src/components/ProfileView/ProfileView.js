import React, { Component } from "react";

import NavBar from "./NavBar";
import UserProfile from "../UserProfile/UserProfile";
import UpdateProfileForm from "../UpdateProfileForm/UpdateProfileForm";
import UpdateProfilePicture from "../UpdateProfilePicture/UpdateProfilePicture";
import DeleteUser from "./DeleteUser";
import { PageHeader } from './PageHeader'

import { Grid, Card } from "semantic-ui-react";

export default class ProfileView extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader />
                <NavBar />
                <Grid container stackable>
                    <Grid.Row />
                    <Grid.Row columns={2}>
                        <Grid.Column floated="left" width={6}>
                            <UserProfile />
                            <Card style={{ margin: "auto", marginTop: "50px" }}>
                                <UpdateProfilePicture />
                                <UpdateProfileForm />
                                <DeleteUser />
                            </Card>
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}