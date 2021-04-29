// ---------------------------------  MAIN FUNCTION ON PAGE LOAD
document.addEventListener("DOMContentLoaded", async function () {

    // defines the function to fetch the latest hash from the plaintext API
    let latestHash = await fetch('https://blockchain.info/q/latesthash')
  
    // makes sure the hash returned is ok (the server is responding)
    // code learnt from https://javascript.info/fetch 
    if (latestHash.ok) {
        // if the server responds, hash represents the response
        var hash = await latestHash.text();
    }
    else {
        // otherwise, show an alert message with the status
        window.alert("HTTP-Error: " + hash.status);
    }

    // splits the hash into manageable arrays (see below)
    let hashRows = splitHash(hash);

    // adds the hash into the text on screen below the canvas so users can see the hash used
    document.getElementById("hash").innerHTML += hashRows[0].join('') + "<br/>" + hashRows[1].join('') + "<br/>" + hashRows[2].join('') + "<br/>" + hashRows[3].join('');

    // draws the unique art
    drawArt(hash, hashRows);
})

// ---------------------------------  SUPPORTING FUNCTIONS
// this function takes the 64-digit hash and splits it into four 16-digit 'row' arrays
// this helps with displaying the hash on screen and for working with it in later
function splitHash(hash) {
    // hash split into individual characters
    let hashArray = hash.split('');
    // rows defined as empty arrays
    var firstRow = [];
    var secondRow = [];
    var thirdRow = [];
    var fourthRow = [];
    // each element added to the four rows
    var i;
    for (i = 0; i < hashArray.length; i++) {
        if (i <= 15) {
            firstRow.push(hashArray[i]);
        }
        else if (i > 15 && i <= 31) {

            secondRow.push(hashArray[i]);
        }
        else if (i > 31 && i <= 47) {
            thirdRow.push(hashArray[i]);
        }
        else {
            fourthRow.push(hashArray[i]);
        }
    }
    // one final array for easy access, return to the master function
    var hashRows = [firstRow, secondRow, thirdRow, fourthRow];
    return hashRows
}

// this function displays some unqiue artwork on the canvas
function drawArt(hash, hashRows){
    // gets the canvas element
    var canvas = document.getElementById('art');
    // defines width/height for later use
    var width = canvas.width;
    var height = canvas.height;
    // gets the colours to be used (see function)
    let colours = getColours(hash)

    // begins the art (if function will return true if canvas accessible)
    if (canvas.getContext) {
        // defines the context (where the art will take place) as art
        var art = canvas.getContext('2d');
        // basic iterative variable for loop
        var i;
        // sets transparency, here fully opaque
        art.globalAlpha = 1.0;
        // cycles through the 45 six-part hexadecimal codes that the get colours function returns (see below)
        for (i = 0; i < 45; i++) {
            // turns the codes into hex colours
            art.fillStyle = '#' + colours[i];
            // uses the colours to draw vertical lines (rectangles) down the canvas 
            art.fillRect(((i * width) / 45), 0, (width/45), height);
        }
    }
    
}

function getColours(hash) {
    // hash split into individual characters
    let hashArray = hash.split('');
    var i;
    var j;
    var colours = [];
    // there are 58 rows of six consecutive hexadecimals within a 64-digit hash
    // beginning at 14 accounts for the first 19 consecutive zeros
    // by starting at #14, the 6-number block will reach #20 from the beginning which may be non-zero
    // first for loop sets the starting point within the 64-digit array
    for (i = 14; i < 58; i++) {
        // within this first for loop, a fresh blank temporary array is created
        var temporaryArray = [];
        // the second for loop collects the six hexadecimals in order and adds them to the temporary array
        for (j = 0; j < 6; j++) {
            temporaryArray.push(hashArray[i+j]);
        }
        // after the second loop, a new colour variable is created out of the temporary array
        var newColour = temporaryArray.join('');
        // this new colour, on its dying breath, is pushed out of both loops to the colours array
        colours.push(newColour);
    }
    // the colours array is returned
    return colours
}

// function defined for later use
function getShapes(hash) {
    // use the string of values as a fraction of the canvas
    // for example: 0, 5 represents x = 0, y = 5/16ths
    // from here, can use cubic bezier curves taking the next four digits
    // need to figure how to jump from one bezier curve to the next as 'fill' will be too messy
    // ideally, a continued curved drawing would be perfect (not sure if poss)
    // colour-wise, cycling through the same colour values for each move would work
}

// ---------------------------------  MODALS FOR LEADERBOARD/ABOUT/CONTACT
// code for modal learnt from https://www.w3schools.com/howto/howto_css_modals.asp

var leaderboard = document.getElementById("leaderboard-modal"); // targets leaderboard modal
var about = document.getElementById("about-modal"); // targets about modal
var contact = document.getElementById("contact-modal"); // targets contact modal

var leaderboardBtn = document.getElementById("leaderboard"); // targets leaderboard button
var aboutBtn = document.getElementById("about"); // targets about button
var contactBtn = document.getElementById("contact"); // targets contact button

var closeLeaderboard = document.getElementById("close-leaderboard"); // targets close buttons
var closeAbout = document.getElementById("close-about"); // targets close buttons
var closeContact = document.getElementById("close-contact"); // targets close buttons


// opens modals on button click
leaderboardBtn.onclick = function() {
    leaderboard.style.display = "block";
}
aboutBtn.onclick = function() {
    about.style.display = "block";
}
contactBtn.onclick = function() {
    contact.style.display = "block";
}

// closes modal on close click
closeLeaderboard.onclick = function() {
    leaderboard.style.display = "none";
}

closeAbout.onclick = function() {
    about.style.display = "none";
}

closeContact.onclick = function() {
    contact.style.display = "none";
}

// closes modal when user clicks outside of window
window.onclick = function(event) {
    if (event.target == leaderboard) {
        leaderboard.style.display = "none";
    }
    if (event.target == about) {
        about.style.display = "none";
    }
    if (event.target == contact) {
        contact.style.display = "none";
    }
}