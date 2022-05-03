var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/convsvc', function(req, res, next) {
  res.send('green: \u{1F7E9} clear: \u{2B1C} yellow: \u{1F7E8}');
});

module.exports = router;
