const { Genre } = require('../models');

const search = async (request, reply) => {
  const genres = await Genre.findAll();
  reply(genres);
};

const get = async (request, reply) => {
  const genre = await Genre.findById(request.params.id);
  reply(genre);
};

const create = async (request, reply) => {
  const genre = await Genre.create({
    name: request.payload.name
  });
  reply(genre);
};

const update = async (request, reply) => {
  let genre = await Genre.update({
    name: request.payload.name
  }, {
    where: {
      id: request.params.id
    }
  });
  genre = await Genre.findById(request.params.id);
  reply(genre);
};

const remove = async (request, reply) => {
  await Genre.destroy({
    where: {
      id: request.params.id
    }
  });
  reply(null);
};

module.exports = {
  search,
  get,
  create,
  update,
  remove
};
