var express = require('express');
var router = express.Router();

/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('pages/two', { title: 'Chapter Two - Variable Scope', data: "Scope is like oxygen to a programmer. It's everywhere. You often don't even think about it. But when it gets polluted... you choke." });
});

module.exports = router;
