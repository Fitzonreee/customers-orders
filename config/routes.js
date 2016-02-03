var customers = require('../server/controllers/customers.js')

module.exports = function(app){
  app.post('/create_customer', function(req, res){
    customers.add(req, res);
  })
}
