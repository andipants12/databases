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
    // }; get: function (req, res) {
    

module.exports = {
  messages: {
    //will handle requests and signal changes to the model
   get: function (req, res) {
      console.log("inside contollers messages get");
      models.messages.get(req, res);

    }, 
    post: function (req, res) {
      console.log("inside contollers messages post");
      models.messages.post(req, res);
    } 
  },

 
   users: {

    get: function (req, res) {
      console.log("inside contollers user get");
      models.users.get(req, res);
    },

    post: function (req, res) {  
    console.log("inside contollers user post");    
      models.users.post(req, res);
    }
  }


};
