const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/about", (req, res) => {
    res.render("about");
  });
  return router;
};
