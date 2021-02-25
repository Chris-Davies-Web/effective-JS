var express = require('express');
var router = express.Router();

/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('pages/four', { title: 'Chapter Four - Objects and Prototypes', data: "JSs inheritence mechanism is based on prototypes rather than classes" });
});

module.exports = router;
