

document.addEventListener("DOMContentLoaded", async function () {

    // defines the function to fetch the latest hash from the plaintext API
    let latestHash = await fetch('https://blockchain.info/q/latesthash')
  
    // makes sure the hash returned is ok (the server is responding)
    // code learnt and utilised from https://javascript.info/fetch 
    if (latestHash.ok) {
        // if the server responds, hash represents the response
        var hash = await latestHash.text();
    }
    else {
        // otherwise, show an alert message with the status
        window.alert("HTTP-Error: " + hash.status);
    }

    // split the hash into manageable arrays (see below)
    let hashRows = splitHash(hash);

    // add the hash into the text on screen below the canvas so users can see the hash
    document.getElementById("hash").innerHTML += hashRows[0].join('') + "<br/>" + hashRows[1].join('') + "<br/>" + hashRows[2].join('') + "<br/>" + hashRows[3].join('');

    drawArt(hash, hashRows);
})

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


function drawArt(hash, hashRows){
    // gets the canvas
    var canvas = document.getElementById('art');
    // defines width/height for later use
    var width = canvas.width;
    var height = canvas.height;

    let colours = getColours(hash)

    // begins the art (if function will return true if canvas accessible)
    
    if (canvas.getContext) {
        // defines the context (where the art will take place) as art
        var art = canvas.getContext('2d');
        // basic iterative
    
        var i;
        art.globalAlpha = 1.0; // added for transaprency (for later if needed)
        for (i = 0; i < 44; i++) {

            //getColours(hashRows);


            art.fillStyle = '#' + colours[i];
            //art.fillRect(10,(height/100),50,50);
            art.fillRect(((i * width) / 44), 0, (width/44), height);
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

function getShapes(hash) {
    // potential idea:
    // using the string of values as a fraction of the canvas
    // for example: 0, 5 represents x = 0, y = 5/16ths
    // from here, can use cubic bezier curves taking the next four digits
    // need to figure how to jump from one bezier curve to the next as 'fill' will be too messy
    // ideally, a continued curved drawing would be perfect (not sure if poss)
    // colour-wise, cycling through the same colour values for each move would work
}
