var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect(function(err) {
  //basically if there is an error with the connection, throw the error
  if (err) {
    throw err;
  }
  //otherwise, tell us that we have connected!
  console.log('you are now connected!');
});

   
// dbConnection.query('select * from user', function(err, results, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
// });


module.exports = dbConnection;
