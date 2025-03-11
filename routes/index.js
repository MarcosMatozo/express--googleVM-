var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();

/* GET home page. */
router.use('/', express.static(path.join(__dirname, '..', 'public_pages', 'home')));



module.exports = router;
