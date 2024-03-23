// just a simple alert to the user that welcome them
function alert_user(){
    var alert_count = 1;
    var alert_message = "Welcome to a page for Metal Band";

//Write message as a alert to the user
    var send_alert = alert_message + " " + alert_count;
    alert(send_alert);

}

alert_user();

//member of the band
// object literal notation
var member = {
    name: 'Placeholder',
    instrument: 'guitar'

};


//object constructor notation
function Person(name,instrument){
    this.name = name;
    this.instrument = instrument;
}

var randomPerson = new Person('Random Person', 'bass');

var Ahmad = new Person('Ahmad', 'guitar');


//prints the members of the band
function printMember(name,instrument){
    //var main = document.getElementById("paragraph");
    var printPlayer = name + " plays "+ instrument + "\n";
    document.write(printPlayer);
}

printMember('Moon', 'drums');
printMember(Ahmad.name, Ahmad.instrument);
printMember(randomPerson.name, randomPerson.instrument);

//function that displays the information of a band member using for loop and iterating through the object
function displayInfo(inputPerson){
    var output = document.getElementById("paragraph");

    for(var item in inputPerson){
        output.innerHTML += '<p>' + inputPerson[item] + '</p>';

    }

}
displayInfo(member);

//function that just checks for if  placeholder is there and adds a new person
function checkplaceholder(){

    var elements = document.getElementById('placeholder');

    if (elements !== null){




        elements.innerHTML += '<p> This is a new person that plays an instrument </p>';

    }

}

checkplaceholder();