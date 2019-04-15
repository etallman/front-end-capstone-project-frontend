import React, { Component } from "react";
import Canvas from "./Canvas/Canvas";
import PageHeader from "./PageHeader/PageHeader"
import Login from "./Login/Login"
import FlowerSearch from "./FlowerSearch/FlowerSearch"
import VeggieSearch from "./VeggieSearch/VeggieSearch"
import TreeSearch from "./TreeSearch/TreeSearch"
import ShrubSearch from "./ShrubSearch/ShrubSearch"
import RegistrationPage from './RegistrationPage/RegistrationPage'
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import '../App.css'
import { NavBar } from './NavBar/NavBar'


//connect navbar to redux state//Can use component=//
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Switch>
          <Route exact path=
            {["/canvas", "/register", "/flowers", "/veggies","/trees","/shrubs"]} render={() => 
            <React.Fragment>
              <PageHeader />
              <NavBar />
              <Switch>
                <Route exact path="/canvas" render={() => <Canvas />} />
                <Route exact path="/register" render={() => <RegistrationPage />} />
                <Route exact path="/flowers" render={() => <FlowerSearch />} />
                <Route exact path="/veggies" render={() => <VeggieSearch />} />
                  <Route exact path="/trees" render={() => <TreeSearch />} />
                  <Route exact path="/shrubs" render={() => <ShrubSearch />} />
              </Switch></React.Fragment>} />
        </Switch>


        {/* <Route exact path = "/canvas" render={() => <Canvas />} 
           <Route path="/toolbar" render={() => <ToolBar />} />
           <Route exact path="/register" render={() => <RegistrationPage /> } />
           <Route exact path="/flowers" render={() => <FlowerSearch />} />
          <Route exact path="/veggies" render={() => <VeggieSearch />} /> */}
      </Switch>
    );
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  }),
  null
)(App);
