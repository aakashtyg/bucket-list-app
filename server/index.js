const express = require('express');

const PORT = 8888;
const app = express();

const mount = (app) => {
  app.listen(PORT);

  console.log(`Server is running at port: ${PORT}`);
};

app.use('/abc', (req, res) => {
  res.send('Hello world');
});

mount(app);
