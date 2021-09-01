const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
 