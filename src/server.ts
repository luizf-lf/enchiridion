import express from 'express';

import './database/connection';

const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  return res.json({ message: 'goodbye world' });
});

app.listen(3333);
