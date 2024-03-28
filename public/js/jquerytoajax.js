// Load the ajaxjquery.html file into the output div, add an effect to the button click event, and fade in the content at 1000 ms
// Use similar code from class material
$('#button').on('click', function() {
    $("#output").load("./data/ajaxjquery.html").hide().fadeIn(1000);
});