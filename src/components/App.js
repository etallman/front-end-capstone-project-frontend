import React, { Component } from "react";
//import "./App.css";
import Canvas from "./Canvas";
import {ToolBar} from "./ToolBar"
import { BrowserRouter,Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Canvas />} />
          <Route path="/toolbar" render={() => <ToolBar />} />
        </Switch>
    
    </BrowserRouter>
      
    );
  }
}

export default App;
