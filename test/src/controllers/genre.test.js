const { test } = require('ava');
const sinon = require('sinon');
const genre = require('../../../src/controllers/genres');
const { Genre } = require('../../../src/models');

test.serial('Should respond for search', async t => {
  const req = {};
  const rep = sinon.stub();
  sinon.stub(Genre, 'findAll').resolves();
  await genre.search(req, rep);
  t.is(Genre.findAll.callCount, 1);
  t.is(rep.callCount, 1);
  Genre.findAll.restore();
});

test.serial('Should respond for get', async t => {
  const req = { params: { id: '97f9b0bd-6453-42f6-a625-fa20270881ee' } };
  const rep = sinon.stub();
  sinon.stub(Genre, 'findById').resolves();
  await genre.get(req, rep);
  t.is(Genre.findById.callCount, 1);
  t.is(rep.callCount, 1);
  Genre.findById.restore();
});

test.serial('Should respond for create', async t => {
  const req = { payload: { name: 'abc' } };
  const rep = sinon.stub();
  sinon.stub(Genre, 'create').resolves();
  await genre.create(req, rep);
  t.is(Genre.create.callCount, 1);
  t.is(rep.callCount, 1);
  Genre.create.restore();
});

test.serial('Should respond for update', async t => {
  const req = { payload: { name: 'abc' }, params: { id: '97f9b0bd-6453-42f6-a625-fa20270881ee' } };
  const rep = sinon.stub();
  sinon.stub(Genre, 'update').resolves();
  sinon.stub(Genre, 'findById').resolves();
  await genre.update(req, rep);
  t.is(Genre.update.callCount, 1);
  t.is(Genre.findById.callCount, 1);
  t.is(rep.callCount, 1);
  Genre.update.restore();
  Genre.findById.restore();
});

test.serial('Should respond for delete', async t => {
  const req = { params: { id: '97f9b0bd-6453-42f6-a625-fa20270881ee' } };
  const rep = sinon.stub();
  sinon.stub(Genre, 'destroy').resolves();
  await genre.remove(req, rep);
  t.is(Genre.destroy.callCount, 1);
  t.is(rep.callCount, 1);
  Genre.destroy.restore();
});

