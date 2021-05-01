// ---------------------------------  TEST FUNCTIONS FOR FUTURE IMPROVEMENTS
    // document.getElementById("test").innerHTML = 'page is working';
    // window.alert("Nice try! Answer the question first!")

    
// ---------------------------------  OPTIONS FOR TAILORING THE HOME SCREEN
// welcome text options
const welcome = [
    "Welcome to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to...",
    "Welcome back to..."]

// title of quiz
const quizTitle = "The Blockchain Quiz";

// greeting text options
const greeting = [
    "You have everything to learn, Newbie.",
    "You have much to learn, Edward",
    "You have much to learn, Ava",
    "You have much to learn, T-800",
    "You are making progress, ROY",
    "You are making progress, Hal",
    "You are making progress, Marvin",
    "You are making progress, David",
    "You are almost there, Agent Smith",
    "You are almost there, Deep Thought",
    "You are almost there, Agent Smith",
    "You know it all, Satoshi."]

// invite text options
    const invite = [
    "Shall we begin?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "Shall we continue?",
    "You have unlocked the full site."
    ]

const button = [
    "BEGIN",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "CONTINUE",
    "PLAY"
    ]

// sets the global variables based on local storage
var previousTopLevelString = window.localStorage.getItem("User Level");
var previousTopScoreString = window.localStorage.getItem("User Score");    

// ---------------------------------  MAIN FUNCTION ON PAGE LOAD
document.addEventListener("DOMContentLoaded", function(){
    
    // obtains previous user level, or sets it to zero if there isn't one
    let previousTopLevel = window.localStorage.getItem("User Level");
    let previousTopScore = window.localStorage.getItem("User Score");
    if (previousTopLevel === null){
        window.localStorage.setItem("User Level", "0");
    }
    if (previousTopScore === null){
        window.localStorage.setItem("User Score", "0");
    } 

    // converts previous user level/score to integers (this is why zero is required earlier)
    let previousLevel = parseInt(previousTopLevelString, 10);
    let previousScore = parseInt(previousTopScoreString, 10); // not used but set for future enhancements

    // start with welcome message via typewriter text
    typeText(welcome[previousLevel], 'welcome')

    // after 0.5 seconds, fade in 'The Blockchain Quiz'
    setTimeout(function(){
        appear(document.getElementById('title'), 0, 10, 150);
    }, 500)

    // after 2.5 seconds, type greeting based on previous user level
    setTimeout(function(){
        typeText(greeting[previousLevel], 'greeting')
    }, 2500)

    // after 5.5 seconds, type the invite to begin based on previous user level
    setTimeout(function(){
        typeText(invite[previousLevel], 'invite')
    }, 5500)

    // after 6.5 seconds begin/continue/play button fades in based on previous user level
    setTimeout(function(){
        document.getElementById('begin-button').innerHTML += button[previousLevel];
        appear(document.getElementById('begin-button'), 0, 5, 50);
    }, 6500)

    // if user level = 11 (previous winner) then display shortcut to winner's area button
    
    if (previousLevel == 11){    
        setTimeout(function(){
                document.getElementById('winners-area').innerHTML += "EXPLORE";
                appear(document.getElementById('winners-area'), 0, 5, 50);
            }, 7000)
    }
})

// ---------------------------------  SUPPORTING FUNCTIONS
// function that types text letter by letter to the inner HTML of the element parament fed into it
function typeText(text, element){
    // speed is speed of typing
    let speed = 50
    // i used here for iteration purposes
    let i = 0
    // function to iterate through the letters of the question in array form 
    for (letter of text){
        type(letter, i);
        i++;
    }
    // function called above that types each letter and iterates
    function type(letter, i){
    setTimeout(function() {
        document.getElementById(element).innerHTML += letter;
    }, speed * i);
    }
}

// function that makes an element appear (or disappear)
// appear function code adapted from https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
// to appear: num = 0 step = positive / to disappear: num = 100 step = negative
function appear(element, num, step, speed){
    var changeOpacity;
    changeOpacity = setInterval(function(){
        var opacity = num / 100;
        num = num + step; 
        if (opacity > 1 | opacity < 0){
            clearInterval(changeOpacity);
            return; 
        }
        // modern browsers
        element.style.opacity = opacity;
        // older IE
        element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}

// ---------------------------------  DETERMINE IF USING TOUCHSCREEN
// on the user's first touch on the home screen, the 'enter quiz' option is tailored
window.addEventListener('touchstart', function() {
    // first, the begin quiz button will now default to the non-interactive quiz
    let beginQuiz = document.getElementById('begin-quiz');
    beginQuiz.href = "quiz-touchscreen.html";
    // second, the accessible button will be hidden (since it is now default option)
    let interactiveQuiz = document.getElementById('begin-accessible');
    interactiveQuiz.style.display = "none";
    // third, the option text will be removed
    let chooseQuiz = document.getElementById('choose-quiz');
    chooseQuiz.style.display = "none";
});


// ---------------------------------  MODAL ON BUTTON CLICK
// code for modal learnt from https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("modal"); // targets modal
var btn = document.getElementById("begin-button"); // targets begin-button
var span = document.getElementsByClassName("close-modal")[0]; // targets close button

// opens modal on button click
btn.onclick = function(){
  modal.style.display = "block";
  if (previousTopScoreString !== null){
  document.getElementById("best-score").innerHTML = "Your previous top score was " + previousTopScoreString;
  }
}

// closes modal on close click
span.onclick = function(){
  modal.style.display = "none";
}

// closes modal when user clicks outside of window
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}

