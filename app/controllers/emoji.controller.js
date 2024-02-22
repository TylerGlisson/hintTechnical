const db = require("../models");
const Emoji = db.emojis;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create an Emoji
  const emoji = {
    id: req.body.id,
    names: req.body.names,
    imgUrl: req.body.imgUrl
  };

  Emoji.create(emoji)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Emoji."
      });
    }); 
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Emoji.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving emojis."
      });
    });
};

