//use express module
const express = require('express');
//create express app, call on express
const app = express();

//create our port
const port = 1337
//create our directory path
const dir = __dirname + '/public';

//use the public directory for static files
app.use(express.static('public'));

//We just add the subdirectories for the images, data, css, and js
app.use(express.static('public/img'));
app.use(express.static('public/data'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));

//get the route for the home page and serve the index.html file
app.get('/', function(request, response){

    response.sendFile(dir + '/index.html');
});

//get the route for the home page and serve the index.html file
app.get('/index', function(request, response){

    response.sendFile(dir + '/index.html');
});

//get the route for the concerts page and serve the concerts.html file
app.get('/concerts', function(request, response){

    response.sendFile(dir + '/concerts.html');
});

//get the route for the music page and serve the music.html file
app.get('/music', function(request, response){

        response.sendFile(dir + '/music.html');
});

//get the route for the about page and serve about.html file
app.get('/about', function(request, response){

        response.sendFile(dir + '/about.html');

});


//use the wildcard for route that does not exist
app.get('/*', function(request, response){

    response.sendFile(dir + '/404.html');

});

//make app listen on port 1337
app.listen(port, function(){
    console.log('Express started on http://localhost:' + port + '; press Ctrl-C to terminate.');

});

