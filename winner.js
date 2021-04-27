

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

    let hashRows = splitHash(hash);
    document.getElementById("hash").innerHTML += hashRows[0] + hashRows[1] + hashRows[2] + hashRows[3];

    drawArt(hashRows);
})

function splitHash(hash) {
    // code to break hash into string with returns every 16 digits
    let hashArray = hash.split(); // hash split every 16 characters
    let firstRow = hashArray[0]; // add first 16 elements in array (0 - 15)
    let secondRow = hashArray[1]; // add second 16 elements in array (0 - 15)
    let thirdRow = hashArray[2]; // add third 16 elements in array (0 - 15)
    let fourthRow = hashArray[3]; // add fourth 16 elements in array (0 - 15)
    let hashRows = [firstRow, secondRow, thirdRow, fourthRow];
    return hashRows
}


function drawArt(hashRows){
    // code to go here that connects with canvas API and draws art
}