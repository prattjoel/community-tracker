const Customer = require('../database/CustomerModel');

const CustomerController = {

  createCustomer(req, res) {
    console.log("creating");
    console.log(req.body);
    const firstCustomer = new Customer({
      firstName: req.body.firstName ,
      lastName: req.body.lastName,
      visits: 1
    });

    firstCustomer.save(function (err, customer) {
      if (err) return console.error(err);
      console.log({customer});
      res.send({customer})
    });
  },

  getAllCustomers (req, res) {
    Customer.find(function (err, customers) {
      if (err) return console.error(err);
      //console.log(kittens);
      res.send({customers})
    })
  },

  addVisit (req, res) {
    Customer.findOne({ firstName: 'Leon' }, (err, customer) => {
      if (err) throw {err};
      let visits = customer.visits + 1
      customer.visits = visits;
      customer.save((err, updatedCust) => {
        if (err) throw {err}
        res.send({updatedCust})
      })
    })
  },

  getCustomer (req, res) {
    // console.log('query', req.query);
    Customer.findOne({ firstName: req.query.first, lastName: req.query.last }, (err, customer) => {
      if (err) throw {err};
      res.send({customer});
    })
  }
}

module.exports = CustomerController
