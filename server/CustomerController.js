const Customer = require('../database/CustomerModel');

const CustomerController = {

  createCustomer(req, res) {
    const firstCustomer = new Customer({
      firstName: req.params.name ,
      lastName: 'Jackson',
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
    Customer.findOne({ firstName: req.params.name }, (err, customer) => {
      if (err) throw {err};
      res.send({customer});
    })
  }
}

module.exports = CustomerController
