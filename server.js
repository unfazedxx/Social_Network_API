//adding in our requirements and confiuring the port 
const router = require("express").Router();
const express = require('express');
const db = require("./config/connection");
const routes = require('./routes');
console.log('test')


const app = express();
const PORT = process.env.PORT || 3002;

app.use (express.json);
app.use (express.urlencoded({extend: true}))
app.use (routes);

router.get("*", (req, res) => {
  console.log('lets see if this works ')
  res.status(200)
})

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });

