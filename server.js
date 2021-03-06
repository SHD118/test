const express = require('express');
const path = require('path');
const htmlRouter = require('./route/html')
const apiRouter = require('./route/api');

const port = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/', htmlRouter);



app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} 🚀`)
);
