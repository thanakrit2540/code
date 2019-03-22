const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test12345@ds121415.mlab.com:21415/ooad');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/home', userRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});