var express = require('express');
var router = express.Router();

/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('pages/one', { title: 'Chapter one' });
});

module.exports = router;
