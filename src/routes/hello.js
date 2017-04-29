const hello = require('../controllers/hello');

const route = {
  method: 'GET',
  path: '/hello',
  handler: hello
};

module.exports = route;
