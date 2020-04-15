const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/schedule", (req, res) => {
    db.getAllClasses()
      .then(data => {
        const classes = data.rows;
        res.json({ classes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
