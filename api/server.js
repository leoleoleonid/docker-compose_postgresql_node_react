const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./src/api');

app.get('/', (request, response) => response.sendStatus(200));
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api',api);

let server;

module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.log(`App started on port ${port}`);
    });
    return app;
  },
  stop() {
    server.close();
  }
};
