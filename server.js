const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// found solution at https://stackoverflow.com/questions/40477625/nodejs-mysql-er-access-denied-error-access-denied-for-user-rootlocalhost
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Yakmeister12'
// });

// connection.query(
//     function(err, results,) {
//         console.log(err);
//         console.log(results);
//         connection.end();
//     }
// );

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
 