var express = require('express');
var router = express.Router();

/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('pages/three', { title: 'Chapter Three - Working with functions', data: "" });
});

module.exports = router;
