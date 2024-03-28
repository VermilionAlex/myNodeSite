
// This function makes a request to the server to get the JSON data
// Use similar code from class material
function makeRequest(){

    //create an instance of the XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    //set the onload event handler
    xhr.onload = function(){
        //check if the status is 200
        if(xhr.status === 200){

            //parse the JSON data
            var response = JSON.parse(xhr.responseText);

            //create a variable to store the output, iterate through JSON and append the data to the output variable
            var output = '';
            for(var i=0; i<response.song.length; i++){
                output += '<p>' + response.song[i].title + '</p>';
                output += '<p>' + response.song[i].description + '</p>';
                output += '<p>' + response.song[i].genre + '</p>';
                output += '<p>' + response.song[i].releaseDate + '</p>';
            }
            document.getElementById('update').innerHTML = output;
        }
    };

    xhr.open('GET', './data/music.json', true);
    xhr.send();
}
makeRequest();