var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marcos Matozo - Portifólio' });
});



module.exports = router;
