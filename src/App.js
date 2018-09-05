import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Customers from "./Customers";

class App extends Component{

  constructor(props){
    super(props)
    this.state = { data: null };
    this.getData = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo()
  .then(res => {
    console.log({res});
    this.setState((prevState) => {
      console.log({prevState});
      const arr1 = [1,2]
      const arr2 = [...arr1, 3, 4]

      const names = [];
      for (let i=0; i < res.length; i++){
        names.push(res[i].firstName);
      }
      const newState = {  data: names};
      return newState;
    })
  })
    .catch(err => console.log({err}));
  }

   async getInfo() {
    const response = await fetch('/api/customers');
    const body = await response.json();
    if (response.status != 200) {
      throw Error(body.message);
    }
    return body.customers;
  };

  render(){
    console.log("app loaded");
    if (this.state.data){
      return(
        <div className="App">
          <Customers names={this.state.data}/>
        </div>
      );
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }

  }
}

export default hot(module)(App);
