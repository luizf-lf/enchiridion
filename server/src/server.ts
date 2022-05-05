import express from 'express';
import { routes } from './routes';

const app = express();
const serverPort = 6545;

// enables the server to receive json on the request body
app.use(express.json());

// use the routes file
app.use(routes);

// app configuration
app.listen(serverPort, () => {
  console.log('HTTP server started on port ' + serverPort);
});
