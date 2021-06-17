const express = require('express');
const { db, BucketListItem } = require('./database');

const PORT = 8888;
const app = express();

const mount = (app) => {
  app.listen(PORT);

  console.log(`Server is running at port: ${PORT}`);

  db.on('error', (error) => {
    console.error('Error connecting to Mongo ', error);
  });

  db.on('open', (error) => {
    console.log('Successfully connected to MongoDB ');
  });
};

app.use('/bucket-list/add', async function (req, res) {
  const item = await BucketListItem.create({
    title: 'go to Japan',
  });

  res.status(200).json({
    data: {
      item,
    },
  });
});

mount(app);
