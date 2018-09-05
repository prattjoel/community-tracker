import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Test from "./testComponent";

class App extends Component{

  render(){
    console.log("app loaded");
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <h1> Hello, World! </h1>
        <Test />
        {/* <h2>{this.state.data}</h2> */}
      </div>
    );
  }
}

export default hot(module)(App);
