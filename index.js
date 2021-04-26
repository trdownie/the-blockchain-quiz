//-------------------- LOCAL STORAGE
// gets previous user level & user score
let previousLevelString = window.localStorage.getItem("User Level");
let previousScoreString = window.localStorage.getItem("User Score");
// converts previous user level/score to integers
let previousLevel = parseInt(previousLevelString, 10);
let previousScore = parseInt(previousScoreString, 10);


//-------------------- WELCOME MESSAGE ANIMATION
// welcome text options
    let welcome
    newWelcome = "Welcome to";
    returnWelcome = "Welcome back to";
// title of quiz
    quizTitle = "The Blockchain Quiz";
// greeting text options
    let greeting
    greeting0 = ""
    greeting1 = "Peter. There is still much to learn."
    greeting2 = 
    greeting3 = 
    greeting4 = 
    greeting5 = 
    greeting6 = 
    greeting7 = 
    greeting8 = 
    greeting9 = 
    greeting10 = "Satoshi, hero of the people."
// invite text options
    let invite
    newInvite = "Shall we begin?";
    returnInvite = "Are you ready?";
    winnerInvite = "You have unlocked the full site."

// function to set greetings to be displayed based on previous level achieved
function setGreeting() {
// sets default greetings for no level found
    if (userLevel = '') {
        welcome = newWelcome
        greeting = greeting0
        invite = newInvite
    }
// sets greetings based on level found
    else {
        switch(userLevel) {
            case 1:
            welcome = returnWelcome
            greeting = greeting1
            invite = returnInvite
            break;
            case 2:
            welcome = returnWelcome
            greeting = greeting2
            invite = newInvite
            break;
            case 3:
            welcome = returnWelcome
            greeting = greeting3
            invite = newInvite
            break;
            case 4:
            welcome = returnWelcome
            greeting = greeting4
            invite = newInvite
            break;
            case 5:
            welcome = returnWelcome
            greeting = greeting5
            invite = newInvite
            break;
            case 6:
            welcome = returnWelcome
            greeting = greeting6
            invite = newInvite
            break;
            case 7:
            welcome = returnWelcome
            greeting = greeting7
            invite = newInvite
            break;
            case 8:
            welcome = returnWelcome
            greeting = greeting8
            invite = newInvite
            break;
            case 9:
            welcome = returnWelcome
            greeting = greeting9
            invite = newInvite
            break;
            case 10:
            welcome = returnWelcome
            greeting = greeting10
            invite = winnerInvite
            break;
        }
    }
}

// animation variables
let typeSpeed = 50

// reusable function for writing typewriter text - couldn't get to work more than once
function typewriterText(textToType, elementId){
    setTimeout(function() {
        document.getElementById(elementId).innerHTML += textToType.charAt(i);
        i++;
        if (i < textToType.length) {
            typewriterText(textToType, elementId);
        }
    }, speed)
}

// greeting functions
// 1 - typewriter text welcome
let i = 0
function typewriterWelcome(){
    setTimeout(function() {
        document.getElementById('welcome').innerHTML += newWelcome.charAt(i);
        i++;
        if (i < newWelcome.length) {
            typewriterWelcome();
        }
    }, typeSpeed)
}

// 2 - title appears
// appear function code adapted from https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
function title() {
    function appear(element, num, step, speed){
        var t_o;
        t_o = setInterval(function(){
            // get opacity in decimals
            var opacity = num / 100;
            // set the next opacity step
            num = num + step; 
            if(opacity > 1){
                clearInterval(t_o);
            // if 1-opaque, stop
                return; 
            }
            // modern browsers
            element.style.opacity = opacity;
            // older IE
            element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
        }, speed);
    }
    appear(document.getElementById('title'), 0, 10, 150);
}

// 3 - typewriter text greeting
let j = 0
function typewriterGreeting(){
    setTimeout(function() {
        document.getElementById('greeting').innerHTML += Greeting0.charAt(j);
        j++;
        if (j < Greeting0.length) {
            typewriterGreeting();
        }
    }, typeSpeed)
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
    }, typeSpeed)
}

// 5 - button appears
// appear function code adapted from https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
function button() {
    function appear(element, num, step, speed){
        var t_o;
        t_o = setInterval(function(){
            // get opacity in decimals
            var opacity = num / 100;
            // set the next opacity step
            num = num + step; 
            if(opacity > 1){
                clearInterval(t_o);
            // if 1-opaque, stop
                return; 
            }
            // modern browsers
            element.style.opacity = opacity;
            // older IE
            element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
        }, speed);
    }
    appear(document.getElementsByTagName('button')[0], 0, 5, 50);
}

// Run Full Greeting (TO ADD SetGreeting function once cookies enabled)
document.addEventListener("DOMContentLoaded",
    typewriterWelcome(),
    setTimeout(function() {
        title()
    }, 1000),
    setTimeout(function() {
        typewriterGreeting()
    }, 4000),
    setTimeout(function() {
        typewriterInvite()
    }, 5000),
    setTimeout(function() {
        button()
    }, 6000),
)

//-------------------- 'BEGIN' MODAL 
// code for modal adapted from https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("modal"); // targets modal
var btn = document.getElementById("begin-button"); // targets begin-button
var span = document.getElementsByClassName("close-modal")[0]; // targets close button

// opens modal on button click
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("best-score").innerHTML = "Your previous top score was " + previousScoreString;
}

// closes modal on close click
span.onclick = function() {
  modal.style.display = "none";
}

// closes modal when user clicks outside of window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

