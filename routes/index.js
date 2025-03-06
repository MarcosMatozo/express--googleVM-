var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Study' });
  res.send('Express Study');
});




// app.use('/public', express.static(path.join(__dirname, '../public')));  

module.exports = router;
