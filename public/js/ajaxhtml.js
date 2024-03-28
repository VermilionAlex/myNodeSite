//function to use ajax to load html file
// Use similar code from class material
function makeRequest(){

    //create an instance of the XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    //set the onload event handler
    xhr.onload = function(){
        if(xhr.status === 200){
            document.getElementById('output').innerHTML = xhr.responseText;
        }
    };
    //open the request and send it to the server
    xhr.open('GET', './data/info.html', true);
    xhr.send();
}
makeRequest();