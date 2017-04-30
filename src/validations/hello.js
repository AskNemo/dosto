const Joi = require('joi');

const validate = {
  params: {
    name: Joi.string()
             .required()
             .description('Name to greet')
  }
};

const hello = {
  description: 'Hello API',
  notes: 'A simple hello API',
  tags: ['api'],
  validate
};

module.exports = hello;
