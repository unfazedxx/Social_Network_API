//adding in our requirements and confiuring the port 

const express = require('express');
const db = require("./config/connection");
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use (express.json);
app.use (express.urlencoded({extend: true}))
app.use (routes);

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });