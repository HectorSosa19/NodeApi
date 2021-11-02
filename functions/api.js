const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    'hello': "hi!",
    'name' : "Hector",
  });
});

router.get("/json", (req, res) => {
    res.json({
      'Course': "Secundary",
      'Nickname' : "Hector El Father",
    });
  });
  
app.use('/', router);

module.exports = app;
module.exports.handler = serverless(app);
