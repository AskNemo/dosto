const hello = (request, reply) => {
  request.log.info('Receive request', request);
  reply('hello world');
};

module.exports = hello;
