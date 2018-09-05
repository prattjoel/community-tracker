import React, {Component} from 'react';

export default class Test extends Component {
  componentDidMount() {
    this.state = {data: null};
    this.getData = this.getData.bind(this);
    this.getInfo()
    .then(res => this.setState({ data: res.test }))
    .catch(err => console.log({err}));
  }

   async getInfo() {
    const response = await fetch('/test');
    const body = await response.json();
    if (response.status != 200) {
      throw Error(body.message);
    }
    return body;
  };

  // testFunc(){
  //   console.log('test');
  // }

  render() {
    return (
      <h1>{this.state.data}</h1>
    );
  }
}
