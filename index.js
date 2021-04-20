


//-------------------- WELCOME MESSAGE ANIMATION
//---------- greetings
    newWelcome = "Welcome to";
    returnWelcome = "Welcome back to";
    winnerWelcome = "Welcome back to";
    quizTitle = "The Blockchain Quiz";
    newGreeting = ""
    returnGreeting1 = "Peter. There is still much to learn."
    newInvite = "Shall we begin?";
    returnInvite = "Are you ready?";
    winnerInvite = "You have unlocked the full site."

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

// GREETING FUNCTIONS
// 1 - typewriter text welcome
let i = 0
let typeSpeed = 50
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
// code adapted from Mic on SO: https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
function title() {
    function appear(elm, num, step, speed){
        var t_o;
        t_o = setInterval(function(){
            // get opacity in decimals
            var opacity = num / 100;
            // set the next opacity step
            num = num + step; 
            if(opacity > 1 || opacity < 0){
                clearInterval(t_o);
            // if 1-opaque or 0-transparent, stop
                return; 
            }
            // modern browsers
            elm.style.opacity = opacity;
            // older IE
            elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
        }, speed);
    }
    appear(document.getElementsByTagName('h1')[0], 0, 5, 150);
}

// 3 - typewriter text greeting
let j = 0
function typewriterGreeting(){
    setTimeout(function() {
        document.getElementById('greeting').innerHTML += newGreeting.charAt(j);
        j++;
        if (j < newGreeting.length) {
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
// code adapted from Mic on SO: https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
function button() {
    function appear2(elm, num, step, speed){
        var t_o;
        t_o = setInterval(function(){
            // get opacity in decimals
            var opacity = num / 100;
            // set the next opacity step
            num = num + step; 
            if(opacity > 1 || opacity < 0){
                clearInterval(t_o);
            // if 1-opaque or 0-transparent, stop
                return; 
            }
            // modern browsers
            elm.style.opacity = opacity;
            // older IE
            elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
        }, speed);
    }
    appear2(document.getElementsByTagName('button')[0], 0, 5, 50);
}

// Run Full Greeting
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

