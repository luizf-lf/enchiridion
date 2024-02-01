import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();
const serverPort = 6545;

// enables the server to receive json on the request body
app.use(express.json());

// use the most devious thing created by a human, also known as CORS
app.use(cors());

// use the routes file
app.use(routes);

// app configuration
app.listen(process.env.PORT || serverPort, () => {
  console.log('HTTP server started on port ' + serverPort);
});
