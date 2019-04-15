import React, { Component } from "react"
import { logout } from "../../actions/auth"
import { connect } from "react-redux"
import { Button, Dimmer, Divider, Menu, Image, Header } from "semantic-ui-react"
import largeSucculent from "../Images/side.jpg"
import { Link } from "react-router-dom"
export class Logout extends Component {
  state = {}

  handleLogout = event => {
    //this.props.logout();
    this.setState({ active: false })
  }

  handleOpen = () => this.setState({ active: true })

  render() {
    const { active } = this.state
    return (
      <Menu.Menu position="right">
        <Menu.Item
          name="logout"
          style={{ color: "gray" }}
          onClick={this.handleOpen}
        />
        <Dimmer
          style={{ backgroundColor: "teal", opacity: "0.7" }}
          active={active}
          page
        >
          <Header as="h1" inverted>
            You Have Successfully Logged Out.
          </Header>
          <Image
            src={largeSucculent}
            style={{ width: "8%", height: "30%", marginLeft: "45%" }}
          />
          <Divider style={{ color: "teal", width: "10%" }} />
          <Header as="h2" inverted>
            Thank You for Stopping By.
          </Header>
          <Header as="h3" inverted>
            Tend Your Garden Again With Us Soon!
          </Header>
          <Link to="/">
            <Button
              name="logout"
              onClick={this.handleLogout}
              size="large"
              color="green"
            >
              Return to the Homepage
            </Button>
          </Link>
        </Dimmer>
      </Menu.Menu>
    )
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.logoutLoading,
    err: auth.loginError
  }),
  { logout }
)(Logout)
