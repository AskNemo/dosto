const hello = require('../controllers/hello');
const config = require('../validations/hello');

const route = {
  method: 'GET',
  path: '/hello/{name}',
  handler: hello,
  config
};

module.exports = route;
