console.log("ola!");
var db = require('../db');

module.exports = {
  messages: {
    //this will modify the data in the data base
    get: function () {
      //querries
      console.log("hey!!!!!!!!!");


      db.query('select * from user', function(err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log("-----------------------");

          console.log(JSON.stringify(results));
        }
      });
      // var q = db.connect.query('select * from user;');
      // console.log("query: ",q);
    }, // a function which produces all the messages
    post: function (data) {
      console.log("data inside post: ",data);
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

