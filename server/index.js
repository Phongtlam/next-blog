const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').load();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(bodyParser.text({ type: 'text/html' }));

  server.use(express.static(path.resolve(__dirname, '..', 'build')));

  server.use((req, res, nextMid) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, OPTIONS'
    );
    nextMid();
  });

  // give all Nextjs's request to Nextjs server
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.use('/post', routes.post);

  server.use('/portfolio', routes.portfolio);

  server.use('/login', routes.login);

  server.get('*', (req, res) => handle(req, res));

  const PORT = process.env.PORT || 3002;

  server.listen(PORT, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(
      `>Environment: ${
        process.env.NODE_ENV
      }\n>Server ready on http://localhost:${PORT}`
    );
  });
});
