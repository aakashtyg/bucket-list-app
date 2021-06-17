const express = require('express');

const PORT = 8888;
const app = express();

const mount = (app) => {
  app.listen(PORT);

  console.log(`Server is running at port: ${PORT}`)
}



mount(app);