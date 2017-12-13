const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require('dotenv').config();


const app = express();
app.use(json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance))
  .catch(console.log);


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`); });
