const mongoose = require('mongoose');

const username = '';
const password = '';
const cluster = '';
const dbName = '';

const uri = '';

try {
  mongoose.connect(uri);
} catch (error) {
  console.log('ERROR in connecting to MongoDB');
}

const db = mongoose.connection;

module.exports = {
  db,
};
