const express = require('express');

const app = express();

const server = app.listen(process.env.PORT, () => {
  console.info(`Dosto listening on ${process.env.PORT}`);
});

module.exports = server;