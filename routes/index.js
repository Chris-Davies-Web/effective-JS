var express = require('express');
var router = express.Router();

/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('pages/main', { title: 'Express' });
});

module.exports = router;
