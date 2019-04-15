import React, { Component } from "react"
import { Tab } from "semantic-ui-react"
import { connect } from "react-redux"
import { Input, Button, Dropdown, Form, Message } from "semantic-ui-react"
import { generalStyling, buttonStyling, tabStyling } from "./styles"
import {
  loadLayout,
  newLayout,
  saveLayout,
  getUserLayoutData,
  patchLayout
} from "../../actions"
import { stateOptions } from "./constants"

class MainMenu extends Component {
  state = {
    id: null,
    value: null,
    name: ""
  }

  handleLoadChange = (e, data) => {
    let key
    for (let element of data.options)
      if (element.value === data.value) key = element.key
    this.setState({ ...this.state, value: data.value, id: key })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSave = e => {
    e.preventDefault()
    if (this.props.id !== null) {
      this.props.patchLayout(this.props.grid, this.props.id)
    } else {
      this.props
        .saveLayout(this.state.name, this.props.grid)
        .then(() => this.props.getUserLayoutData(this.props.userId))
    }
  }

  handleLoad = e => {
    e.preventDefault()
    this.props.loadLayout(this.state.id)
    this.setState({ ...this.state, name: this.props.name })
  }

  handleNewLayOut = e => {
    e.preventDefault()
    this.props.newLayout()
  }

  render() {
    const panes = [

         {
        menuItem: "Save Your Garden As...",
        render: () => (
          <div style={{ }}>
            <Form onSubmit={this.handleSave}>
              <Tab.Pane style={tabStyling} >
                <Input
                  style={generalStyling}
                  placeholder="Garden Name..."
                  name="name"
                  required
                  onChange={this.handleChange}
                  value={
                    this.props.id === null ? this.state.name : this.props.name
                  }
                  disabled={this.props.id !== null ? true : false}
                />
                <Button
                  style={{backgroundColor:'#78A9BB', color: 'white'}}
                  disabled={this.props.token === null ? true : false}
                >
                  Save
                </Button>
                {this.props.saveMessage && (
                  <Message positive>
                    <Message.Header>Success!</Message.Header>
                    <p>Your Garden Was Saved.</p>
                  </Message>
                )}
                {this.props.errorMessage && (
                  <Message negative>
                    <Message.Header>
                      There was some errors with your submission
                    </Message.Header>
                    <p>
                      Empty layouts cannot be saved or there was a communicaiton
                      error with the server.
                    </p>
                  </Message>
                )}
              </Tab.Pane>
            </Form>
          </div>
        )
      },
      {
        menuItem: "Start a New Garden",
        render: () => (
           <div>
            <Form onSubmit={this.handleNewLayOut}>
              <Tab.Pane style={tabStyling}>
                <Button
                  style={{width:"50%", backgroundColor: "#78A9BB", color: 'white'}}
                  disabled={this.props.userHasLayouts ? false : true}
                >
                  New Garden
                </Button>
              </Tab.Pane>
            </Form>
           </div>
        )
      },
     
      {
        menuItem: "Open an Existing Garden",
        render: () => (
          <div>
            <Form onSubmit={e => this.handleLoad(e)}>
              <Tab.Pane style={tabStyling}>
                {this.props.userHasLayouts ? (
                  <Dropdown
                    required
                    placeholder={"Select a layout..."}
                    style={generalStyling}
                    onChange={this.handleLoadChange}
                    selection
                    options={this.props.userLayouts.map(object => {
                      return {
                        key: object.id,
                        value: object.name,
                        text: object.name
                      }
                    })}
                    value={this.state.value}
                  />
                ) : (
                  <Dropdown
                    text="You have not saved a layout, yet..."
                    disabled
                  />
                )}
                <Button
                  style={buttonStyling}
                  disabled={this.props.userHasLayouts ? false : true}
                >
                  Load
                </Button>
              </Tab.Pane>
            </Form>
          </div>
        )
      },
      {
        menuItem: "Find Flowers By State",
        render: () => (
          <div style={{display:"flex", justifyContent:"center"}}>
            <Form>
              <Tab.Pane style={tabStyling}>
                <Dropdown
                  onChange={this.props.chooseState}
                  selection
                  placeholder="All States"
                  options={stateOptions}
                  disabled={this.props.selectedCategory!== "Flowers" ? true:false}
                />
              </Tab.Pane>
            </Form>
          </div>
        )
      }
    ]
    return (
      <div style={{display:"flex", justifyContent:"center"}}>
      <Tab
        menu={{ borderless: true, attached: false, tabular: false }}
        panes={panes}
        grid={{tabWidth: 12, paneWidth:12}}
      />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.login.token !== null ? state.auth.login.token : null,
    userId: state.auth.login.id,
    id: state.grid.id,
    name: state.grid.name,
    userLayouts: state.grid.userLayouts,
    userHasLayouts: state.grid.userHasLayouts,
    saveMessage: state.grid.saveMessage,
    errorMessage: state.grid.errorMessage
  }
}

const mapDispatchToProps = {
  loadLayout,
  newLayout,
  saveLayout,
  getUserLayoutData,
  patchLayout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)
