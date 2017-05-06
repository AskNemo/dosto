const Joi = require('joi');

const validId = Joi.string().guid().description('Genre ID');

const validName = Joi.string().description('Genre Name');

const searchGenre = {
  description: 'Get all geners',
  notes: 'Genre API document',
  tags: ['api']
};

const getGenre = {
  description: 'Get a genre',
  notes: 'Genre API document',
  tags: ['api'],
  validate: {
    params: {
      id: validId.required()
    }
  }
};

const createGenre = {
  description: 'Create a new genre',
  notes: 'Genre API document',
  tags: ['api'],
  validate: {
    payload: {
      name: validName.required()
    }
  }
};

const updateGenre = {
  description: 'Update a genre',
  notes: 'Genre API document',
  tags: ['api'],
  validate: {
    params: {
      id: validId.required()
    },
    payload: {
      name: validName
    }
  }
};

const removeGenre = {
  description: 'Remove a genre',
  notes: 'Genre API document',
  tags: ['api'],
  validate: {
    params: {
      id: validId.required()
    }
  }
};

module.exports = {
  getGenre,
  createGenre,
  updateGenre,
  removeGenre,
  searchGenre
};
