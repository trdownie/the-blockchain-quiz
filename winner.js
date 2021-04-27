

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

    document.getElementById("hash").innerHTML = hash;

    drawArt(hash);
})

function drawArt(hash){
    // code to go here that connects with canvas API and draws art
}