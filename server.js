//Use code from lab and the examples in class

//load http module
var http = require('http');

//filesystem
var fs = require('fs');

//port
var port = 1337;

//function to read file from path
function serveStaticFile(res, path, contentType, responseCode) {

    //if no http status code, set to 200
    if (!responseCode) {
        responseCode = 200;
    }

    //read the file
    fs.readFile(__dirname + path, function (err, data) {

        //if error, send 500 error
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');

            //if no error, send the response code and content type
        } else {
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }


    });

}

//function to create an HTTP server
http.createServer(function (req, res) {
    //get the path, normalizing the string
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    //switch statement to handle the different paths
    switch (path) {
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/index.html':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/about.html':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;






        case '/concerts.html':
            serveStaticFile(res, '/public/concerts.html', 'text/html');
            break;

        case '/music.html':
            serveStaticFile(res, '/public/music.html', 'text/html');
            break;

        /* CSS files */

        case '/css/Client.css':
            serveStaticFile(res, '/public/css/Client.css', 'text/css');
            break;


        /* Image files */


        case '/images/ClientWebImage1.jpg':
            serveStaticFile(res, '/public/images/ClientWebImage1.jpg', 'image/jpeg');
            break;

        case '/images/concept_logo.png':
            serveStaticFile(res, '/public/images/concept_logo.png', 'image/png');
            break;
        case '/images/coming-3605857_640.jpg':
            serveStaticFile(res, '/public/images/coming-3605857_640.jpg', 'image/jpeg');
            break;


        /* JavaScript files */

        case '/js/ajaxHTML.js':
            serveStaticFile(res, '/public/js/ajaxHTML.js', 'text/javascript');
            break;

        case '/js/calender.js':
            serveStaticFile(res, '/public/js/calender.js', 'text/javascript');
            break;


        case '/js/concert.js':
            serveStaticFile(res, '/public/js/concert.js', 'text/javascript');
            break;

        case '/js/outputXML.js':
            serveStaticFile(res, '/public/js/outputXML.js', 'text/javascript');
            break;

        case '/js/jsonUpdate.js':
            serveStaticFile(res, '/public/js/jsonUpdate.js', 'text/javascript');
            break;

        case '/js/jquery-3.7.1.js':
            serveStaticFile(res, '/public/js/jquery-3.7.1.js', 'text/javascript');
            break;

        case '/js/jquery-ui.min.js':
            serveStaticFile(res, '/public/js/jquery-ui.min.js', 'text/javascript');
            break;

        case '/js/about.js':
            serveStaticFile(res, '/public/js/about.js', 'text/javascript');
            break;
        case '/js/uiJQ.js':
            serveStaticFile(res, '/public/js/uiJQ.js', 'text/javascript');
            break;


        /* Datafiles */

            case '/data/AJAXjQuery.html':
                serveStaticFile(res, '/public/data/AJAXjQuery.html', 'text/html');
                break;

            case '/data/music.json':
                serveStaticFile(res, '/public/data/music.json', 'application/json');
                break;


            case '/data/tickets.xml':
                serveStaticFile(res, '/public/data/tickets.xml', 'application/xml');
                break;


            case '/data/info.xml':
                serveStaticFile(res, '/public/data/info.xml', 'application/xml');
                break;




            //default case to send 404 error
        default:

            serveStaticFile(res, '/public/404.html', 'text/html', 404);

            break;
    }

}).listen(port);

console.log("Server started on http://localhost:" + port);

