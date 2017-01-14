var models = require('../models');
var express = require('express');
var app = express();

module.exports = {
  messages: {
    //will handle requests and signal changes to the model
    get: function (req, res) {
      //response write head with status codes and messages
      //response.end --> what to do when the response is finished, in this case, we need to connect with the data base
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      //.on('data') and .on('end')

      //collect the data in stringified form from client
      //create an object id and time stamp for the message
      //interact with database to add the message (add it to the messages table) [I think this will be a call to the model]
      //send response, including the end method which will parse the data
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

