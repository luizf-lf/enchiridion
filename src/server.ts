import express from 'express';

const app = express();

app.use(express.json());

app.listen(5000);

app.get('/', (request, response) => {
  return response.json({ message: 'Ok' });
});
