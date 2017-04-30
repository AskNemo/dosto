const Hapi = require('hapi');
const plugins = require('./src/plugins');
const routes = require('./src/routes');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT
});

routes.forEach(route => {
  server.route(route);
});


server.register(plugins, (err) => {
  if (err) throw err;
});

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('info', `Server running at: ${server.info.uri}`);
});

module.exports = server;
