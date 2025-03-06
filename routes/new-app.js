var express = require('express');
const path = require('path');
const app = express();
var router = express.Router();


app.use('/app-builds', express.static(path.join(__dirname, '..', 'app-builds', 'app1')));

// router.get('/', (req, res) => {
//     console.log('__dirname', path.join(__dirname, '..', '/app-builds/app1/' ));
//     // res.sendFile(path.join(__dirname, '..', '/app-builds/app1/', 'index.html'));
// });


module.exports = router;

