import React from 'react';

function Customers (props) {
  // console.log({props});
  if (props.names){
    const items = props.names.map((name, index) => {
      // console.log({name});
      return <li key={index}>{name}</li>
    });
    // console.log({items});
    return (
      <ul>{items}</ul>
    );
  }else{
    return <div>Loading..</div>
  }
}

export default Customers;
