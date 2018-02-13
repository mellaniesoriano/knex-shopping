const environment = process.env.ENVIRONMENT || 'developent';
const config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
