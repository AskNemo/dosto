const genre = require('../controllers/genres');
const config = require('../validations/genre');

const route = [{
  method: 'GET',
  path: '/genre/',
  handler: genre.search,
  config: config.searchGenre
}, {
  method: 'GET',
  path: '/genre/{id}',
  handler: genre.get,
  config: config.getGenre
}, {
  method: 'POST',
  path: '/genre/',
  handler: genre.create,
  config: config.createGenre
}, {
  method: 'PUT',
  path: '/genre/{id}',
  handler: genre.update,
  config: config.updateGenre
}, {
  method: 'DELETE',
  path: '/genre/{id}',
  handler: genre.remove,
  config: config.removeGenre
}];

module.exports = route;
