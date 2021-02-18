var express = require('express');
var router = express.Router();

/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('pages/one', { title: 'Chapter one - Accustoming yourself to JS' });
});


module.exports = router;
