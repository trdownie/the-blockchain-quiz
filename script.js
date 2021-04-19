


//-------------------- WELCOME MESSAGE ANIMATION
//---------- Broad Variables
    newWelcome = "Welcome to";
    returnWelcome = "Welcome back to";
    winnerWelcome = "Welcome back to";
    quizTitle = "The Blockchain Quiz";
    newGreeting = ""
    returnGreeting1 = "Peter. There is still much to learn."
    newInvite = "Shall we begin?";
    returnInvite = "Are you ready?";
    winnerInvite = "You have unlocked the full site."

// reusable function for writing typewriter text
function typewriterText(textToType, elementId){
    setTimeout(function() {
        document.getElementById(elementId).innerHTML += textToType.charAt(i);
        i++;
        if (i < textToType.length) {
            typewriterText(textToType, elementId);
        }
    }, speed)
}

// GREETING FUNCTIONS
// 1 - typewriter text welcome
let i = 0
let speed = 100
function typewriterWelcome(){
    setTimeout(function() {
        document.getElementById('welcome-message').innerHTML += newWelcome.charAt(i);
        i++;
        if (i < newWelcome.length) {
            typewriterWelcome();
        }
    }, speed)
}

// 2 - non-typewriter text title
function title(){
    setTimeout(function() {
        document.getElementById("welcome-message").append(document.createElement("br"));
        document.getElementById("welcome-message").append(quizTitle);
        document.getElementById("welcome-message").append(document.createElement("br"));
    }, 2000);
}

// 3 - typewriter text greeting
let j = 0
function typewriterGreeting(){
    setTimeout(function() {
        document.getElementById('welcome-message').innerHTML += newGreeting.charAt(j);
        j++;
        if (j < newGreeting.length) {
            typewriterGreeting();
        }
    }, speed)
}

// 4 - typewriter text invite
let k = 0
function typewriterInvite(){
    setTimeout(function() {
        document.getElementById('invite').innerHTML += newInvite.charAt(k);
        k++;
        if (k < newInvite.length) {
            typewriterInvite();
        }
    }, speed)
}

// Run Full Greeting
document.addEventListener("DOMContentLoaded",
    typewriterWelcome(),
    title(),
    setTimeout(function() {
        typewriterGreeting()
    }, 3000),
    setTimeout(function() {
        typewriterInvite()
    }, 4000)
)
