const { test } = require('ava');
const sinon = require('sinon');
const hello = require('../../../src/controllers/hello');

test('Should respond', t => {
  const req = { params: { name: 'hey' } };
  const rep = sinon.stub();
  hello(req, rep);
  t.is(rep.callCount, 1);
});
