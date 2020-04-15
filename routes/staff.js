const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/staff", (req, res) => {
    db.getAllEmployees()
      .then(data => {
        const employees = data.rows;
        res.render("staff", { employees });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
