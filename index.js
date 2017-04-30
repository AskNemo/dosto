const Hapi = require('hapi');
const logger = require('./src/plugins/logger');
const vision = require('./src/plugins/vision');
const inert = require('./src/plugins/inert');
const swagger = require('./src/plugins/swagger');
const routes = require('./src/routes');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT
});

routes.forEach(route => {
  server.route(route);
});


server.register([
  logger,
  inert,
  vision,
  swagger
], (err) => {
  if (err) throw err;
});

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('info', `Server running at: ${server.info.uri}`);
});

module.exports = server;
