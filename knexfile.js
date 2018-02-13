// Update with your config settings.
const CONFIG = require('./config/config.json');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: `${CONFIG.DB_PW}`,
      password: `${CONFIG.DB_PW}`,
      database: 'knex_shopping',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
