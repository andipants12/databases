console.log("ola!");
var db = require('../db');

module.exports = {
  messages: {
    //this will modify the data in the data base
   get: function (req, res) {
      console.log("inside get of models messages");
      var q = 'SELECT * FROM messages';
      db.query(q, function (err) {
        if (err) {
          console.log(err);
        }
    
        res.end(JSON.stringify());
      });
    }, 

    post: function (req, res) { 
      console.log("inside models users post"); 
      var q = 'INSERT INTO messages SET ?';
      var args = req.body;
      console.log("arguments:------------------------------------------- ",args);
      db.query(q, args, function(err) {
        if (err) {
          console.log(err);
        }
        res.end();
      });
    }
  },

  users: {

     get: function (req, res) {
      console.log("inside get of models users");
      var q = 'SELECT * FROM users';
      db.query(q, function (err) {
        if (err) {
          console.log(err);
        }
       
        
        res.end(JSON.stringify());
      });
    }, 

    post: function (req, res) { 
      console.log("inside models users post"); 
      var q = 'INSERT INTO users SET ?';
      var args = req.body;
      console.log("arguments: ",args);
      db.query(q, args, function(err) {
        if (err) {
          console.log(err);
        }
        res.end();
      });
    }

  }

};