import express from 'express';

const app = express();
const serverPort = 6545;

// routes
app.get('/users', (req, res) => {
  return res.send('Users Response');
});

// app configuration
app.listen(serverPort, () => {
  console.log('HTTP server started on port ' + serverPort);
});
