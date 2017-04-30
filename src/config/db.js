const url = require('url');

const config = {
  define: {
    underscored: true
  }
};

if (process.env.DATABASE_URI) {
  const parts = url.parse(process.env.DATABASE_URI, true);

  let username = null;
  let password = null;
  let database = null;

  if (parts.auth) {
    username = parts.auth.split(':')[0];
    password = parts.auth.split(':')[1];
  }

  if (parts.pathname) {
    database = parts.pathname.replace(/^\//, '');
  }

  Object.assign(config, {
    dialect: parts.protocol.replace(/:$/, ''),
    host: parts.hostname,
    port: parts.port,
    url: process.env.DATABASE_URI,
    username,
    password,
    database
  });
}

module.exports = config;
