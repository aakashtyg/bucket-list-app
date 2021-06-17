const mongoose = require('mongoose');

const username = 'admin';
const password = 'uT6RmSnS89ppfT1Y';
const cluster = 'cluster0.mlpfp';
const dbName = 'myFirstDatabase';

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

try {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  console.log('ERROR in connecting to MongoDB');
}

const db = mongoose.connection;
const { BucketListItem } = require('./models/BucketListItem');

module.exports = {
  db,
  BucketListItem,
};
