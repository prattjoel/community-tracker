import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Customers from "./Customers";

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      data: null,
      firstName: '',
      lastName: ''
    };
    this.getData = this.getInfo.bind(this);
    this.getCustomers = this.getCustomers.bind(this);
    this.getOneCustomer = this.getOneCustomer.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }

  componentDidMount() {

  }

  async getInfo(url) {
    const response = await fetch(url);
    // console.log({response});
    const body = await response.json();
    if (response.status != 200) {
      throw Error(body.message);
    }
    // console.log({body});
    return body;
  };

  getCustomers() {
    const url = '/api/customers'
    this.getInfo(url)
    .then(res => {
      // console.log(res.customers);
      const names = [];
      for (let i=0; i < res.customers.length; i++){
        const currName = res.customers[i].firstName;
        // console.log({currName});
        names.push(res.customers[i].firstName);
      }
      // console.log({names});
      this.setState({ data: names })
    })
    .catch(err => console.log({err}));
  }

  getOneCustomer() {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    const { firstName, lastName } = this.state

    const url = `/api/customer/?first=${firstName}&last=${lastName}`;
    fetch(url)
    .then( res => {
      return res.json()
    })
    .then( json => {
      this.setState({ customer: json.customer.firstName });
    })
    .catch(err => console.log({err}));
    //this.getInfo(url)
    // .then(res => {
    //   // console.log({res});
    //
    //   this.setState({ customer: res.customer.firstName });
    // })
    // .catch(err => console.log({err}))

  }

  addCustomer() {
    const { firstName, lastName } = this.state
    const customerName = { firstName, lastName }
    console.log({customerName});
    const url = '/api/add';
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(customerName),
    })
    .then((res) => {
      return res.json();
    })
    .then(json => {
      this.setState({ customer: json.customer.firstName })
    })
    .catch(err => console.log({err}));

  }

  handleFirstName (event){
    this.setState({firstName: event.target.value});
  }

  handleLastName (event){
    this.setState({lastName: event.target.value});
  }

  render(){
    // console.log("app loaded");
    if (this.state.data || this.state.customer){
      return(
        <div className="App">
          <button onClick={this.getCustomers}> Get Customers </button>
          <button onClick={this.getOneCustomer}> Get Customer </button>
          <Customers names={this.state.data}/>
          <Customers names={[this.state.customer]} />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.getCustomers}> Get Customers </button>
          <button onClick={this.getOneCustomer}> Get One Customer </button>
          <button onClick={this.addCustomer}> Add Customer </button>
          <input type='text' value={this.state.value} onChange={this.handleFirstName} />
          <input type='text' value={this.state.value} onChange={this.handleLastName} />
        </div>
      )
    }

  }
}

export default hot(module)(App);
