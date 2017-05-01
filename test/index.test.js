const { test } = require('ava');
const Hapi = require('hapi');
const server = require('../');

test('Should be a Server instance', t => {
  t.is(server instanceof Hapi.Server, true);
});
