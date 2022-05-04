var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* Convert gameboard string. */
router.post('/convsvc', function(req, res, next) {
  let output = "";

  ({word, conditions} = req.body);

  // convert puzzle solution to string
  for (c of word) {
    output += c;
  }
  output += '\n';

  // convert user guesses to string
  for (row of conditions) {
    for (cell of row) {
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
    }
    output += '\n';
  }
  output = output.slice(0, -1);  // remove final linefeed

  res.send(output);
});

module.exports = router;
