const express = require('express');
const routes = require('./routes');
// Import sequelize connection
const sequelize = require('./config/connection.js'); // Update this path if necessary

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api', routes); // Ensure routes are prefixed with /api or adjust accordingly

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }) // Set force to true to drop and recreate tables on each restart (for development)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
