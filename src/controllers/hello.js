const hello = (request, reply) => {
  reply(`hello ${request.params.name}`);
};

module.exports = hello;
