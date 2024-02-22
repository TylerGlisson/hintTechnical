module.exports = app => {
    const emojis = require("../controllers/emoji.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", emojis.create);
  
    router.get("/", emojis.findAll);
  
    app.use('/api/emojis', router);
  };