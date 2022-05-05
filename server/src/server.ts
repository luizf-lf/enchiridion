import express from 'express';
import { prisma } from './prisma';

const app = express();
const serverPort = 6545;

// enables the server to receive json on the request body
app.use(express.json());

// routes
app.post('/feedbacks', async (req, res) => {
  // console.log(req.body);

  const { comment, type, screenshot } = req.body;

  await prisma.feedback
    .create({
      data: {
        comment,
        type,
        screenshot,
      },
    })
    .then((data) => {
      return res.status(201).json({ status: 'OK', error: null, data });
    })
    .catch((e) => {
      return res.status(500).json({ status: 'ERROR', error: e });
    });
});

// app configuration
app.listen(serverPort, () => {
  console.log('HTTP server started on port ' + serverPort);
});
