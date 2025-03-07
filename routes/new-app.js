var express = require('express');
const path = require('path');
const app = express();
var router = express.Router();


console.log(111, path.join(__dirname, '..', 'public_pages', 'casamento'))
app.use('/casamento', express.static(path.join(__dirname, '..', 'public_pages', 'casamento')));
// router.get('/', (req, res) => {
//     console.log('__dirname', path.join(__dirname, '..', '/app-builds/app1/' ));
//     // res.sendFile(path.join(__dirname, '..', '/app-builds/app1/', 'index.html'));
// });


module.exports = router;

