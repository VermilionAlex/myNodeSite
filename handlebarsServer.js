
//var path = require('path');

//use express module
var express = require('express');
//create express app, call on express
var app = express();

//create our port
var port = 1337;

//we setup our handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//create our directory path
const dir = __dirname + '/public';

//use the public directory for static files
app.use(express.static('public'));

//We just add the subdirectories/root directories for the images, data, css, and js
app.use(express.static('public/img'));
app.use(express.static('public/data'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));


//render the template files, which have our html content
app.get('/', function(req, res){
    res.render('index',{HANDLETITLE: 'EXILE'});
});

app.get('/index', function(req, res){
    res.render('index',{HANDLETITLE: 'EXILE'});

});

app.get('/concerts', function(req, res){
    res.render('concerts',{HANDLETITLE: 'Concerts'});

});

app.get('/music', function(req, res){
    res.render('music',{HANDLETITLE: 'New Music'});

});

app.get('/about', function(req, res) {
    res.render('about', {HANDLETITLE: 'About Page'});
});

//catch error pages, 404 error
app.use(function(req, res){

    res.status(404);
    res.render('404');
});

//500 error
app.use(function(err,req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');

});

//app listens on port 1337
app.listen(port, function(){
    console.log('Express started on http://localhost:' + port + '; press Ctrl-C to terminate.');
});