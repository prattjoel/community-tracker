const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const CustomerController = require('./CustomerController');

// app.get('/', (req, res) => {
//   // res.sendFile(path.join(__dirname, '../src', 'index.js'));
//   res.send({express: 'backend connected'})
// })

app.use(express.static("dist"));
app.use(bodyParser.json());

app.post('/api/add', CustomerController.createCustomer)

app.get('/api/customers', CustomerController.getAllCustomers)

app.get('/api/update', CustomerController.addVisit)

app.get('/api/customer/', CustomerController.getCustomer)

app.listen(8080, () => console.log('listening to 8080'));
