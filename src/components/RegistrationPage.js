import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { registerThenNavToLogin as register } from '../actions/auth';
import {
    Form,
    Button,
    Input
} from "semantic-ui-react";
import { NavBar } from './NavBar'
import { PageHeader } from './PageHeader'
export class RegistrationPage extends Component {

    state = {
        username: "",
        password: "",
        displayName: "",
        region: ""
    }

    handleRegister = e => {
        e.preventDefault();
        // this.props.register(this.state);
        this.props.register({ ...this.state });
    };

    handleChange = e => {
        // this.setState({ [e.target.name]: e.target.value });
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    };

    render() {
      const { isLoading, err } = this.props

        return (
            <React.Fragment>
                <PageHeader />
                <NavBar />

                <div className="pageDiv">
                    <Form className="formDiv" onSubmit={this.handleRegister} >
                        <Form.Field
                            label="Username:"
                            required
                            placeholder="Username"
                            type="text"
                            control={Input}
                            autoFocus
                            onChange={this.handleChange}
                            name="username"
                        />
                        <Form.Field
                            label="Password:"
                            required
                            placeholder="Password"
                            type="password"
                            control={Input}
                            onChange={this.handleChange}
                            name="password"
                        />
                        <Form.Field
                            label="Display Name:"
                            required
                            placeholder="Choose a Display Name"
                            type="text"
                            control={Input}
                            onChange={this.handleChange}
                            name="displayName"
                        />

                        <Form.Field
                            label="Region:"
                            required
                            placeholder="Choose a Region for Your Garden"
                            type="text"
                            control={Input}
                            onChange={this.handleChange}
                            name="region"
                        />
            <Button.Group>
                <Button
                  type="submit"
                  positive
                  size="large"
                  to="/profile"
                  disabled={isLoading}
                  onClick={this.handleRegister}
                > 
                  Start Gardening!
                </Button>
                <Button.Or />
                <Link to="/">
                  <Button size="large" color="teal">
                    Change Your Mind? Go Back Here!
                  </Button>
                </Link>
              </Button.Group>
                     
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    ({ auth }) => ({
        isLoading: auth.registerLoading,
        err: auth.registerError
    }),
    { register }
)(RegistrationPage);