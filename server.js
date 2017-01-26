var express = require('express');
var app = express();

//Hosting static files
app.use(express.static(__dirname+ '/'));
//Routes
app.get('/', function (req, res) {
    res.redirect('/dist/views/index.html');
});

//Launching server
app.listen(8080, function (req,res) {
});

