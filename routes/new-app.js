var express = require('express');
const path = require('path');
const app = express();
var router = express.Router();

// app.use('/casamento', express.static( path.join(__dirname ,'..', 'public_pages', 'casamento' ) ));

router.use('/', express.static(path.join(__dirname, '..', 'public_pages', 'casamento')));

module.exports = router;

