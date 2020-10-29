const express = require("express");
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const db = require("../models");

router.post("/", function(req, res) {
  db.Cat.create({
    name: req.body.name,
    sleepy: req.body.sleepy == 'true' || req.body.sleepy === true // Coercing the type to be a boolean, since we are getting passed a string
  }).then(function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.patch("/:id", function(req, res) {
  db.Cat.update({
    sleepy: req.body.sleepy == 'true' || req.body.sleepy === true // Coercing the type to be a boolean, since we are getting a string
  }, {
    id: req.params.id
  }).then(function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/:id", function(req, res) {
  db.Cat.delete(req.params.id).then(function(result) {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
