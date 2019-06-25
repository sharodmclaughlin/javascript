
// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener




// this is the code for changing a background image
// missing image url
function changeImg(){
 document.getElementById('background').style.backgroundImage = "url('./assets/nipseyhussle.jpg')";
}

 






// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';

});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});
 
