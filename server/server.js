const express = require('express');
const path = require('path');
const app = express();
const CustomerController = require('./CustomerController');

// app.get('/', (req, res) => {
//   // res.sendFile(path.join(__dirname, '../src', 'index.js'));
//   res.send({express: 'backend connected'})
// })

app.use(express.static("dist"));

app.get('/add/:name', CustomerController.createCustomer)

app.get('/api/customers', CustomerController.getAllCustomers)

app.get('/update', CustomerController.addVisit)

app.get('/customer/:name', CustomerController.getCustomer)

app.listen(8080, () => console.log('listening to 8080'));
