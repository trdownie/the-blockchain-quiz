


//-------------------- WELCOME MESSAGE ANIMATION
//---------- Variables
    newWelcome = "Welcome to";
    returnWelcome = "Welcome back to";
    winnerWelcome = "Welcome back to";
    let lineBreak = document.createElement("br");
    quizTitle = "The Blockchain Quiz";
    newGreeting = ""
    returnGreeting1 = "Peter. There is still much to learn."
    newInvite = "Shall we begin?";
    returnInvite = "Are you ready?";
    winnerInvite = "You have unlocked the full site."
    let i = 0;
    let j = 0;
    let speed = 100;

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
function welcome(callback){
    typewriterText(newWelcome, 'welcome-message')
    callback()
}

// 2 - non-typewriter text title
function title(){
    setTimeout(function() {
        document.getElementById("welcome-message").append(lineBreak);
        document.getElementById("welcome-message").append(quizTitle);
    }, 2000);
}

// 3 - typewriter text greeting
function greeting(){
    typewriterText(newGreeting, 'welcome-message')
}

// 4 - typewriter text invite
function invite(){
    typewriterText(newInvite, 'invite')
}

document.addEventListener("DOMContentLoaded",
    welcome(
        title(
            greeting(
                invite()
            )
        )
    )
)
