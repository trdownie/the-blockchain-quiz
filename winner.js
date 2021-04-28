

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

        for (i = 0; i < 44; i++) {

            //getColours(hashRows);
            art.fillStyle = '#' + colours[i];
            //art.fillRect(10,(height/100),50,50);
            art.fillRect(((i * width) / 44), 0, (width/44), height);
        }
        
        //art.fillStyle = 'rgb(200, 0, 0)';
        //art.fillRect(10, 10, 50, 50);

        //art.fillStyle = 'rgba(0, 0, 200, 0.5)';
        //art.fillRect(30, 30, 50, 50);
    }
    
}

function getColours(hash) {

    // hash split into individual characters
    let hashArray = hash.split('');
    var i;
    var j;
    var colours = [];
    // 58 used as there are 58 rows of six hexidecimals within a 64-digit hash
    for (i = 14; i < 58; i++) {
        var temporaryArray = [];
        for (j = 0; j < 6; j++) {
            temporaryArray.push(hashArray[i+j]);
        }
        var newColour = temporaryArray.join('');
        colours.push(newColour);
    }
    document.getElementById("test").innerHTML += colours;
    return colours
}