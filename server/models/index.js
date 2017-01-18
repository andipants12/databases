console.log('ola!');
var db = require('../db');

//refactor the query function => DRY fool

module.exports = {
  messages: {
    //this will modify the data in the data base
    get: function(callback) {
      //fetch messages
      // need to get: id, text, room name, username;
      var querryString = 'select messages.id, users.username, messages.message, messages.roomname from messages left outer join users on (messages.username = users.id) order by messages.id desc';
      //left outer join takes everything from the left table and matches from the right table (will load all messages even if there isn't a match to the user table)
      db.query(querryString, function (err, results) {
        //callback needs to be a parameter in the get method
        callback(results);

      });
    }, 
    post: function (params, callback) { 
      //create a message 
      var querryString = 'INSERT INTO messages(username, message, roomname) values ((select id from users where users.id = ?), ?, ?)';
      db.query(querryString, params, function(err) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    }
  },

  users: {
    get: function (callback) {
      //fetch all users
      var querryString = 'SELECT * FROM users';
      db.query(querryString, function (err, results) {
        //error handling?
        //node callbacks take call a callback on the results if no error ==> the get request must take a callback function
        callback(results);
        // doooo something
        
        // res.end(JSON.stringify());
      });
    }, 
    post: function (params, callback) { 
      //create a user 
      var querryString = 'INSERT INTO users(username) values (?)';
      db.query(querryString, params, function(err) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    }

  }

};