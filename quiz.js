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

// run master function on page load
function runQuiz(){

    // default userLevel
    let userLevel = 0
    // default userScore
    let userScore = 0

    // loads full question page up
    function displayQuestion() {
        
        // appends correct question number on load
        document.getElementById("question-number").innerHTML += (userLevel + 1);
        
        // asks question in typewriter text
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
        
        // displays timer after 2.5 seconds
        function displayTimer() {
            setTimeout(function() {    
                appear(document.getElementById('timer-box'), 0, 10, 50)
            }, 00)
        }
        displayTimer()

        // displays answers after 3.5 seconds
        // appear function code adapted from https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
        function displayAnswer() {
            setTimeout(function() {    
                appear(document.getElementById('answer-one'), 0, 10, 50)
            }, 3500)
        }
        displayAnswer()
        
    }
    // on click of submit button assess whether correct and adjust user level/score or run fail
    function assessAnswer() {
    }

    function failModal(userLevel, userScore) {
    // on run displays modal by adding inner html to elements based on userLevel/userScore info saved in array
    // modal also has button to begin quiz again reminding users of prize
    }

    function weHaveAWinner(userLevel, userScore) {
    // takes user to winner's area & stores/overwrites cookie
    }

    // RUNS THE FUNCTIONS
    displayQuestion()
}


document.addEventListener("DOMContentLoaded",
    runQuiz()
)