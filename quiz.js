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

var answerOne = document.getElementById("answer-one"); // targets form for answer one
var answerTwo = document.getElementById("answer-two"); // targets form for answer two
var answerThree = document.getElementById("answer-three"); // targets form for answer three
var answerFour = document.getElementById("answer-four"); // etc
var answerFive = document.getElementById("answer-five");
var answerSix = document.getElementById("answer-six");
var answerSeven = document.getElementById("answer-seven");
var answerEight = document.getElementById("answer-eight");
var answerNine = document.getElementById("answer-nine");
var answerTen = document.getElementById("answer-ten");

const answers = [
    'What is blockchain technology?',
    'What are nodes to blockchain?',
    'What makes Bitcoin unique over regular banking?',
    'What is mining to blockchain?',
    'How are transactions in the blockchain verified?',
    'What do miners receive in return for this work?',
    'What are the costs of Bitcoin transactions on the Blockchain?',
    'What are hashes to the blockchain?',
    'What is a nonce to the blockchain?',
    'How many bytes are the hashes that bitcoin’s Secure Hash Algorithm 256 (SHA-256) produces?',
    'What is a Merkle tree and how does it benefit the blockchain?']


// default userLevel, increasing by 1 as each question is answered
const userLevel = 0
// default userScore, increasing by time on clock as each question answered
const userScore = 0

// start quiz on page load
function runQuiz(userLevel, userScore){



    // loads full question page up based on userLevel
    function displayQuestion(userLevel, userScore) {
        
        // resets question number and loads correct question number based on user level
        document.getElementById("question-number").innerHTML = '';
        document.getElementById("question-number").innerHTML += 'Question ' + (userLevel + 1);
        
        // sets the question
        // let q = "What is blockchain technology?"
        // var q = answers[0]

        ////// USER LEVEL TEST: POP-UP (WILL NOT WORK)
        window.alert("userLevel is " + String(userLevel));

        

        // resets question ready to ask next question
        document.getElementById('question').innerHTML = '';

        // asks question in typewriter text
        const q = answers[userLevel]
        let i = 0
        function askQuestion(){
            setTimeout(function() {
                document.getElementById('question').innerHTML += q.charAt(i);
                i++;
                if (i < q.length) {
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
                const seconds = 59
                setInterval(function(){
                    if (seconds > 9) {
                        document.getElementById('timer').innerHTML = '0:' + seconds;
                        seconds-- ;
                    }
                    else if (seconds < 10 & seconds > 0){
                        document.getElementById('timer').innerHTML = '0:0' + seconds;
                        seconds-- ;
                        }
                    else {
                        document.getElementById('timer').innerHTML = '&#128128';
                    }
                }, 1000);
            }, 5000)
        }
        beginTimer()
    }
    displayQuestion(userLevel, userScore)

    // on click of submit button assess whether correct and adjust user level/score or run fail
    // NEED TO ADD FUNCTION TO TURN USER LEVEL INTO SUBMIT X, qX & obtain different answers from an index

    function assessAnswer(userLevel, userScore, seconds) {
                                        ////// USER LEVEL TEST: IN QUESTION BOX
                document.getElementById("question-number").innerHTML += ' userLevel is ' + String(userLevel);
                document.getElementById("question-number").innerHTML += ' userScore is ' + String(userScore);
        var correctAnswer = "b"
        var answerGiven = document.querySelector('input[name="q1"]:checked').value
            if (answerGiven == correctAnswer){
                userLevel ++;
                userScore += seconds;

                // load next question
                // displayQuestion(userLevel, userScore)

                runQuiz(userLevel, userScore)
            }
            else {
                failModal()
            }
        }
    document.getElementById('submit-one').onclick = function(){
    assessAnswer(userLevel, userScore);
}    

    function failModal(userLevel, userScore) {
    // on run displays modal by adding inner html to elements based on userLevel/userScore info saved in array
    // modal also has button to begin quiz again reminding users of prize
        // opens modal on function run (closing modal not an option)
        document.getElementById("fmodal").style.display = "block";
    }
}

    


function weHaveAWinner(userLevel, userScore) {
// takes user to winner's area & stores/overwrites cookie
}




document.addEventListener("DOMContentLoaded",
    runQuiz(userLevel, userScore)
)