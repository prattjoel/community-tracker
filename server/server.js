const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../src', 'index.js'));
  res.send({express: 'backend connected'})
})

app.get('/test', (req, res) => {
  res.send({test: 'testing url'})
})

app.listen(5000, () => console.log('listening to 5000'));
