var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(99999999999)
  res.render('index', { title: 'Express Study' });
});



module.exports = router;
