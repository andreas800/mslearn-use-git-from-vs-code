const express = require('express'); // commentary 0
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Git!' });
});

module.exports = router;    //commentary