var models = require('../models');
var express = require('express');
//do we need to require parser here?

/*
bodyparser methods
.text --> parses bodies to strings
req.body --> new body containing parsed data populated on the request object
*/

module.exports = {
  messages: {
    //will handle requests and signal changes to the model
    get: function (req, res) {
      //.complete invoked when query completed (kind of like a promise)
      //in find all, instruct orm to include the user model in the fetch 
        //performs a left outer join by default (with the word include)
        //noteL if the user model had a property called required set to true ==> inner join
      Message.findAll( {include: [User]} ).complete(function(error, result) {
        res.json(result);          
      });
    }, 
    post: function (req, res) {
      //sequilize expects the on object with all the parameters we want to build
      User.findOrCreate({username: req.body.username}).complete(function(error, user) {
        var params = {
          //username needs to rep user ID ==> interact with user table
          //need a step prior to the params assignment to fetch the user id based on the provided user name
          //the result, or user is the user object ==> can access the id from the db info
          userid: user.id, 
          message: req.body[message], 
          roomname: req.body[roomname]
        };
        Message.create(params).complete(function (error, result) {
          res.json(result);
        });
      });

    } 
  },
  users: {
    get: function (req, res) {
      //don't need to iunclude the user since we are only dealing with user
      User.findAll().complete(function (error, result) {
        res.json(result);
      });
    },
    post: function (req, res) {  
      var params = {username: req.body[username]};
      User.create(params).complete(function(error, user) {
        res.sendStatus(201);
      });

      // var params = [req.body.username];
      // models.users.post(params, function(err, response) {
      //   res.json(response);
      // });
    }
  }
};


////////////////////////////////////////////////////////////////////////////////
//////////////////////////OLD VERSION///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// module.exports = {
//   messages: {
//     //will handle requests and signal changes to the model
//     get: function (req, res) {
//       models.messages.get(function(err, response) {
//         //response should return a json of the results (from the model's query)
//         //sends a json response (use instead of res.end())
//         res.json(response);
//       });
//     }, 
//     post: function (req, res) {
//       //sql expects the parameters to be in the form of an array
//       //they can be accessed via kv pairs of the req.body object;
//       var params = [req.body[username], req.body[message], req.body[roomname]];
//       models.messages.post(params, function(err, response) {
//         res.json(response);
//       });
//     } 
//   },
//   users: {
//     get: function (req, res) {
//       models.users.get(function(err, response) {
//         //also want to send back a json of the result from the model's query
//         res.json(response);
//       });
//     },
//     post: function (req, res) {  
//       var params = [req.body.username];
//       models.users.post(params, function(err, response) {
//         res.json(response);
//       });
//     }
//   }
// };