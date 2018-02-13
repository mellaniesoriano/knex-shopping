const express = require('express');
const knex = require('./knex/knex.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('smoke test');
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
