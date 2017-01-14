var models = require('../models');
var express = require('express');
//do we need to require parser here?

/*
bodyparser methods
.text --> parses bodies to strings
req.body --> new body containing parsed data populated on the request object

*/
//this is the data we will be posting
    // var message = {
    //   username: app.username,
    //   text: app.$message.val(),
    //   roomname: app.roomname || 'lobby'
    // };

module.exports = {
  messages: {
    //will handle requests and signal changes to the model
    get: function (req, res) {
      res.send('meow meow meow');

    }, // a function which handles a get request for all messages

    post: function (req, res) {
      //we don't need to manually create the object ID since our database will increment for us
      //call models.post with the stringified message
      res.end(models.post(JSON.stringify(message)));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

