import React from 'react';

function Customers (props) {
  console.log({props});
  const items = props.names.map((name, index) => {
    console.log({name});
    return <li key={index}>{name}</li>
  });
  console.log({items});
  return (
    <ul>{items}</ul>
  );
}

export default Customers;
