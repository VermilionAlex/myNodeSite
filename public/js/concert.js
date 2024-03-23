
//we use jQuery to change the background color and font size of our h2 tags
function changeTags() {
    $('h2').css('background', 'linear-gradient(to right, black, darkred)');
    $('h2').css('font-size', '30px');

}
changeTags();

//we use jQuery to add a date to our concert page
function addDate(){

    //grabs the upcoming id and adds a date to the list of upcoming concerts
    var $element = $('#upcoming');
    var textADD = 'To be Announced!';
    if($element.length >0){
        var $first = $element.find('li').first();

        //if the first.length is greater than 0, it will append the date to the list
        if($first.length > 0){
            $first.append(textADD);
        }
        //else it will append the date to the list
        else{
            $('<li>').append(textADD).appendTo($element);
        }
    }

}
addDate();


//we use jQuery to show and hide the upcoming events
//declare a variable to keep track of the state of the button
var showConcert = false;

//grabs the button and the upcomingEvents id, event listener to show and hide the upcoming events
$('#show-event').on('click', function() {
    //grabs the button and the upcomingEvents id
    var $button = $(this);
    var $element = $('#upcomingEvents');

    //if the showConcert is false, when the button is clicked it will show the upcoming events, else it will show the upcoming events
    if (showConcert === false){
        $element.css('display', 'block');
        $button.text('Hide Events');

        //Give source for the image and gives statement for the upcoming events
        $element.html('<p>This is a teaser for their upcoming show</p>' +
                '<p>Image by QuinceCreative source from <a href="https://pixabay.com/illustrations/coming-soon-coming-soon-banner-3605857/">Pixabay</a></p>'

        );


        //appends the image to the upcoming events
        $('<img>').attr({
            'src': './images/coming-3605857_640.jpg',
            'alt': 'QuinceCreative image'
            //add in an animation to fade in the image
        }).appendTo($element).hide().fadeIn('slow');
        showConcert = true;

        //else it will hide the upcoming events, assign the button to show upcoming events, and hide the image
    } else {
        $element.hide();
        $button.text('Show Upcoming Events');
        $element.empty();
        showConcert = false;
    }
});

//add an animation for nav bar, call back function, we hide the nav bar, fade in the nav bar, slide up the nav bar, and fade in the nav bar
$('nav').hide().fadeIn(1000, function() {

    $(this).slideUp(1000).fadeIn(1000);
});
//Old function changed
/*
//function to highlight our heading tag
function changeTags() {

    //grabs the h2 tag and iterates through the list of h2 tags, changes the background color and font size to highlight
    var element = document.getElementsByTagName('h2');

    for (var i = 0; i < element.length; i++)
    {
        element[i].style.background = 'linear-gradient(to right, pink, lightblue)';
        element[i].style.fontSize = '30px';
    }

}

changeTags();
*/


/*
//function to add dates to our concert page
function addDate(){

    //grabs the upcoming id and adds a date to the list of upcoming concerts
    var element = document.getElementById('upcoming');
    var textADD = 'To be Announced!';

    //if there is an element, it will add the date to the list
    if(element){

        //grabs the first index of the list and adds the date to the list
        var first = element.getElementsByTagName('li')[0];

        //if there is a first index, it will append the date to the list
        if(first){
            var newText = document.createTextNode(textADD);
            first.appendChild(newText);
        }
        else{
            var elli = document.createElement('li');
            var newText = document.createTextNode(textADD);
            elli.appendChild(newText);
            element.appendChild(elli);

        }

    }


}
addDate();
*/



//Old function for button click
/*
//grabs the button and sets the showConcert to false
var button = document.getElementById('show-event');
var showConcert = false;

//function to show the upcoming events, if it is false, show the events, else hide the events
function onShow(){

    //grabs the upcomingEvents id and sets the button to show upcoming events
    var element = document.getElementById('upcomingEvents');

    //when the button is clicked, it will show the upcoming events, assign the button to hide events, and show the image
    if(showConcert === false){

        element.style.display = 'block';
        button.innerHTML = 'Hide Events';
        element.innerHTML = '<p>' + 'This is a teaser for their upcoming show' + '</p>';
        element.innerHTML += '<p>' + 'Image by QuinceCreative source from https://pixabay.com/illustrations/coming-soon-coming-soon-banner-3605857/' + '</p>';

        var image = document.createElement('img');
        image.src = './images/coming-3605857_640.jpg';
        image.alt = 'QuinceCreative image';

        element.appendChild(image);

        showConcert = true;
    }
    //else hide the upcoming events, assign the button to show upcoming events, and hide the image
    else{

        element.style.display = 'none';
        button.innerHTML = 'show upcoming events';
        element.innerHTML = '';
        showConcert = false;
    }


}
button.addEventListener('click', onShow);

 */