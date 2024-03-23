//Couldn't figure out how to do API key for google calender so I grabbed the link from the google calender

//This function creates a new calender and appends it to the calender div
function newCalender(calendarId){

    //gets the calender div id
    const calendarEl = document.getElementById('calender');

    //creates a new iframe element and sets the source to the google calender
    const iframe = document.createElement('iframe');
    iframe.src = `https://calendar.google.com/calendar/embed?src=c_bd60e8f4acd7b7fe6ee14b5a4b39ba3d14001ba6c2b7d39174d62433dba2f9b8%40group.calendar.google.com&ctz=America%2FNew_York`;
    iframe.style.border = '0';
    iframe.style.width = '800px';
    iframe.style.height = '600px';
    iframe.style.frameborder = '0';

    calendarEl.appendChild(iframe);

}
//calls the function to create a new calender
newCalender();