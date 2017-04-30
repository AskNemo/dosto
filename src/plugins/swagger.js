const pack = require('../../package.json');
const swagger = require('hapi-swagger');

const options = {
  info: {
    'title': 'Dosto API Docs',
    'version': pack.version
  }
};

module.exports = {
  register: swagger,
  options
};
