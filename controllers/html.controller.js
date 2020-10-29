const express = require("express");
const views = require("../views");
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Cat.findAll().then(function(cats) {
    res.send(
      views.layout({
        children: views.cats({ cats })
      })
    );
  });
});

// Export routes for server.js to use.
module.exports = router;
