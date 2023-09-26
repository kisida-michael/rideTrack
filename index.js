const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

require ('./api/parks/parkDataController');

// Initialize your express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors()); // This allows all CORS requests. Adjust accordingly based on your needs.


// Start the server
const PORT = process.env.PORT || 3000; // Use the port from the environment variables or default to 3000.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
