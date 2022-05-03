var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* Convert gameboard string. */
router.post('/convsvc', function(req, res, next) {
  let output = "";

  ({word, conditions} = req.body);

  word.forEach(c => {
    output += c;
  });
  output += '\n';

  conditions.forEach(row => {
    row.forEach(cell => {
      switch (cell) {
        case 0:
          // clear
          output += '\u{2B1C}';
          break;
        case 1:
          // yellow
          output += '\u{1F7E8}';
          break;
        case 2:
          // green
          output += '\u{1F7E9}';
          break;
        default:
          res.send("Invalid gameboard string.");
          return;
      }
    });
    output += '\n';
  });

  res.send(output);
});

module.exports = router;
