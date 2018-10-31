const http = require('http');
const server = require('./app');

const nodeServer = http.createServer(server);

const PORT = process.env.PORT || 3001;

nodeServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`next-blog listening on port ${PORT}!`);
});
