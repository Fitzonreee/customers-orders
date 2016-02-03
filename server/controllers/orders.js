var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
  return {
    add: function(req, res){
      console.log(req.body);
    }

  }
})();
