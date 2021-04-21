//-------------------- COOKIES
//---------- set achieved level (on question fail)
function storeLevel(level) {
  document.cookie = userLevel + "=" + level + ";path=/";
}

//-------------------- QUIZ

var questionOne = document.getElementById("question-one"); // targets form for question one
var questionTwo = document.getElementById("question-two"); // targets form for question two
var questionThree = document.getElementById("question-three"); // targets form for question three
var questionFour = document.getElementById("question-four"); // etc
var questionFive = document.getElementById("question-five");
var questionSix = document.getElementById("question-six");
var questionSeven = document.getElementById("question-seven");
var questionEight = document.getElementById("question-eight");
var questionNine = document.getElementById("question-nine");
var questionTen = document.getElementById("question-ten");

function runQuiz(){ // run master function on page load

// default userLevel = 0
    let userLevel = 0
// default userScore = 0
    let userScore = 0

    function displayQuestion() {
// appends 1 to the question title on load
        document.getElementById("question-number").innerHTML += (userLevel + 1);

// asks question in typewriter text

// timer fades in but doesn't begin
// unhides q1 (form/answers) after 3 seconds & starts timer
// on click of submit, assess whether right/wrong
// if correct move userLevel up by 1, add timer count to userScore, run Q2
// if incorrect display modal using level/score & stores/overwrites cookie
    }

//    function failModal(userLevel, userScore) {
// on run displays modal by adding inner html to elements based on userLevel/userScore info saved in array
// modal also has button to begin quiz again reminding users of prize
//    }

//    function weHaveAWinner(userLevel, userScore) {
// takes user to winner's area & stores/overwrites cookie
//    }

//}
    displayQuestion()
}

document.addEventListener("DOMContentLoaded",
    runQuiz()
)