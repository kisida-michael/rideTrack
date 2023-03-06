const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);

app.use(express.static(path.join(__dirname, '/rideWaitFrontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/rideWaitFrontend/build/index.html'));
});

const PORT = process.env.PORT || 3081;
http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
