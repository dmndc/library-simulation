const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require('dotenv').config();

// Require books controller
const booksCtrl = require('./books_controller');


const app = express();
app.use(json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance))
  .catch(console.log);


app.post('/api/book', booksCtrl.create);
app.get('/api/books', booksCtrl.getAll);
app.get('/api/book/:id', booksCtrl.getOne);
app.put('/api/book/:id', booksCtrl.update);
app.get('/api/book/:id', booksCtrl.delete);


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`); });
