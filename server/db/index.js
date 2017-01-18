
var Sequilize = require('Sequilize');
var orm = new Sequilize('chat', 'root', '');
//database, username, password;

//orm creates intuitive rep of the data
//create an orm user object:
var User = orm.define('User', {
  username: Sequilize.STRING
});

//create an orm Message object:
var Message = orm.define('Message', {
  message: Sequilize.STRING,
  roomname: Sequilize.STRING
});

//declare relationship between the two:
User.hasMany(Messages);
//belongs to tells the orm where the foreign keys are
Message.belongsTo(User);

//synchronize the data base with the schema we have created:
User.sync();
Message.sync();

//export them:
exports.User = User;
exports.Message = Message;



////////////////////////////////////////////////////////////////////////////////
//////////////////////////OLD VERSION///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// var mysql = require('mysql');
// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// var dbConnection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

// dbConnection.connect(function(err) {
//   //basically if there is an error with the connection, throw the error
//   if (err) {
//     throw err;
//   }
//   //otherwise, tell us that we have connected!
//   console.log('you are now connected!');
// });

   
// // dbConnection.query('select * from user', function(err, results, fields) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(results);
// //   }
// // });


// module.exports = dbConnection;
