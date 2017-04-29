const Hapi = require('hapi');
const logger = require('./src/lib/logger');
const routes = require('./src/routes');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT
});

routes.forEach(route => {
  server.route(route);
});

server.register(logger, (err) => {
  if (err) throw err;
});

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('info', `Server running at: ${server.info.uri}`);
});

module.exports = server;
