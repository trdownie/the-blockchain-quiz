

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

    drawArt(hashRows);
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


function drawArt(hashRows){
    // code to go here that connects with canvas API and draws art

    
}