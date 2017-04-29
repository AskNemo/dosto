const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT,
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => reply('hello world'),
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
