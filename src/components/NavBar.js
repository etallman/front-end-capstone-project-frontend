import React, { Component } from "react"
import { Menu, Dropdown } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Logout } from "./Logout"

export class NavBar extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  // handleLogin = e => {
  //   e.preventDefault()
  //   this.props.login({ ...this.state });
  // };

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>
      
        <Menu
          pointing
          secondary
          stackable
          color="pink"
          style={{ fontSize: "20px", fontFamily: "Raleway" }}
        >
          <Menu.Item
            name="garden planner"
            style={{ color: "gray" }}
            active={activeItem === "garden planner"}
            onClick={this.handleItemClick}
            as={Link}
            to="/canvas"
          />
          <Menu.Item style={{ color: "gray" }}>
            Plants
            <Dropdown>
              <Dropdown.Menu item name="Plants">
                <Dropdown.Item
                  name="flowers"
                  style={{ color: "gray" }}
                  active={activeItem === "flowers"}
                  onClick={this.handleItemClick}
                  to="/flowers"
                  as={Link}
                >
                  Flowers
                </Dropdown.Item>
                <Dropdown.Item
                  name="veggies"
                  style={{ color: "gray" }}
                  active={activeItem === "veggies"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/veggies"
                >
                  Veggies
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              style={{ color: "gray" }}
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
              as={Logout} 
             
            />
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    )
  }
}

export default NavBar
