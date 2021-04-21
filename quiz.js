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

var questionOne = document.getElementById("answer-one"); // targets form for answer one
var questionTwo = document.getElementById("answer-two"); // targets form for answer two
var questionThree = document.getElementById("answer-three"); // targets form for answer three
var questionFour = document.getElementById("answer-four"); // etc
var questionFive = document.getElementById("answer-five");
var questionSix = document.getElementById("answer-six");
var questionSeven = document.getElementById("answer-seven");
var questionEight = document.getElementById("answer-eight");
var questionNine = document.getElementById("answer-nine");
var questionTen = document.getElementById("answer-ten");

// start quiz on page load
function startQuiz(){

    // default userLevel, increasing by 1 as each question is answered
    let userLevel = 0
    // default userScore, increasing by time on clock as each question answered
    let userScore = 0

    // loads full question page up based on userLevel
    function displayQuestion(userLevel, userScore) {
        
        // appends correct question number on load
        document.getElementById("question-number").innerHTML += (userLevel + 1);
        
        // asks question in typewriter text
        // NEED TO ADD FUNCTION TO TURN USER LEVEL INTO QUESTION X
        let i = 0
        let q1 = 'What is blockchain?'
        function askQuestion(){
            setTimeout(function() {
                document.getElementById('question-one').innerHTML += q1.charAt(i);
                i++;
                if (i < q1.length) {
                    askQuestion();
                }
            }, 100)
        }
        askQuestion()

        // defines appear function for later use
        function appear(element, num, step, speed){
                var t_o;
                t_o = setInterval(function(){
                    var opacity = num / 100;
                    num = num + step; 
                    if(opacity > 1){
                        clearInterval(t_o);
                        return; 
                    }
                    // modern browsers
                    element.style.opacity = opacity;
                    // older IE
                    element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
                }, speed);
            }
        
        // displays timer after 3 seconds
        function displayTimer() {
            setTimeout(function() {    
                appear(document.getElementById('timer-box'), 0, 10, 50)
            }, 3000)
        }
        displayTimer()

        // displays answers after 4 seconds
        // appear function code adapted from https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
        // NEED TO ADD FUNCTION TO TURN USER LEVEL INTO ANSWER X
        function displayAnswer() {
            setTimeout(function() {    
                appear(document.getElementById('answer-one'), 0, 10, 50)
            }, 4000)
        }
        displayAnswer()
        
        // starts timer once answer has loaded (5 seconds)
        function beginTimer () {
            setTimeout(function() {
                let seconds = 59
                setInterval(function(){
                    if (seconds > 0) {
                        if (seconds > 9) {
                        document.getElementById('timer').innerHTML = '0:' + seconds;
                        seconds-- ;
                        }
                        else {
                        document.getElementById('timer').innerHTML = '0:0' + seconds;
                        seconds-- ;
                        }
                    }
                    else {
                        document.getElementById('timer').innerHTML = '&#128128';
                        clearInterval()
                    }
                }, 1000);
            }, 5000)
        }
        beginTimer()
    }
    displayQuestion(userLevel, userScore)
}

    
// on click of submit button assess whether correct and adjust user level/score or run fail
// NEED TO ADD FUNCTION TO TURN USER LEVEL INTO SUBMIT X, qX & obtain different answers from an index
function assessAnswer(userLevel, userScore) {
    var correctAnswer = "b"
    var answerGiven = document.querySelector('input[name="q1"]:checked').value
        if (answerGiven == correctAnswer){
            // userLevel ++;
            // load next question
            // displayQuestion(userLevel, userScore)
            document.getElementById("question-number").innerHTML += ('win');
        }
        else {
            // fail modal
            document.getElementById("question-number").innerHTML += ('fail');
            // failModal()
        }
    }

function failModal(userLevel, userScore) {
// on run displays modal by adding inner html to elements based on userLevel/userScore info saved in array
// modal also has button to begin quiz again reminding users of prize
    // opens modal on function run (closing modal not an option)
    document.getElementById("fmodal").style.display = "block";
}

function weHaveAWinner(userLevel, userScore) {
// takes user to winner's area & stores/overwrites cookie
}




document.addEventListener("DOMContentLoaded",
    startQuiz(),
)

document.getElementById('submit-one').onclick = function(){
    assessAnswer();
}