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
    
      models.messages.get();
      //write a promise that will then parse and send data;
      res.send('meow meow meow');

    }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log('inside post controller');
      //we don't need to manually create the object ID since our database will increment for us
      //call models.post with the stringified message
      // req.on('data', function(chunk) {
      //   console.log('chunk as it comes', chunk);
      // });
      // console.log("inside contorller's post");
      // console.log(JSON.stringify(message), 'this is the stingified message on post request');
      // res.end(models.messages.post(JSON.stringify(message)));

      //set up as a primise to index models post method
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

