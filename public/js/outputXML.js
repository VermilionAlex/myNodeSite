
// This function is used to get the value of a tag from an XML file
// Use similar code from class material
function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].textContent;
}

function makeRequest(){

    //create an instance of the XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    //set the onload event handler
    xhr.onload = function(){

        //check if the status is 200
        if(xhr.status === 200){

            //get the responseXML
            var response = xhr.responseXML;
            var output = '';

            //get the ticket tag from the XML file, iterate through the tags and get the id and price, and append it to the output variable
            var content = response.getElementsByTagName('ticket');
            for(var i=0; i<content.length; i++){
                output += '<p>' + getNodeValue(content[i], 'id') + '</p>';
                output += '<p>' + getNodeValue(content[i], 'price') + '</p>';
            }
            document.getElementById('ticket').innerHTML = output;
        }
    };

    xhr.open('GET', './data/tickets.xml', true);
    xhr.send();
}
makeRequest();