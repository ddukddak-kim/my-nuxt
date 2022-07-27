const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('api sends you -- ' + Math.random());
});

app.use('/hello', require('./hello'));

module.exports = {
  path: '/api',
  handler: app
};
