var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');
var userCtrl = require('./controllers/userController');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/user', userCtrl);

var port = process.env.PORT || 8888;
var server = app.listen(port, function () {
    console.log('Server listening on ' + port);
});

app.get('/', (req, res) => {
    res.json({
        msg: 'hello from nodejs api'
    });
})