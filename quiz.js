//-------------------- COOKIES
//---------- set achieved level (on question fail)
function storeLevel(level) {
  document.cookie = userLevel + "=" + level + ";path=/";
}

//-------------------- QUIZ

// questions to ask user
const questionList = [
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

// answer forms taken from html
const answerBox = [
    document.getElementById("answer-one"),
    document.getElementById("answer-two"),
    document.getElementById("answer-three"),
    document.getElementById("answer-four"),
    document.getElementById("answer-five"),
    document.getElementById("answer-six"),
    document.getElementById("answer-seven"),
    document.getElementById("answer-eight"),
    document.getElementById("answer-nine"),
    document.getElementById("answer-ten")]

// correct answers (not correct yet)
const correctAnswerList = ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]

// selector for identifying form
const answerSelector = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11"]

// submit buttons taken from html
const submitButton = [
    document.getElementById("submit-one"),
    document.getElementById("submit-two"),
    document.getElementById("submit-three"),
    document.getElementById("submit-four"),
    document.getElementById("submit-five"),
    document.getElementById("submit-six"),
    document.getElementById("submit-seven"),
    document.getElementById("submit-eight"),
    document.getElementById("submit-nine"),
    document.getElementById("submit-ten"),
    document.getElementById("submit-eleven")]

// default userLevel, increasing by 1 as each question is answered
var userLevel = 0
// default userScore, increasing by time on clock as each question answered
var userScore = 0

// starts quiz on page load
document.addEventListener("DOMContentLoaded", function () {

    if (userLevel < 11) {
        displayQuestion(userLevel, userScore);
        submitButton[userLevel].onclick = function(){
            assessAnswer(userLevel, userScore)
            let userLevel = assessAnswer(userLevel, userScore)
            }
    }
    else {
        weHaveAWinner(userLevel, userScore)
    }
})


// loads question up based on userLevel
function displayQuestion(userLevel, userScore) {
    
    // resets question number and loads correct question number based on user level
    document.getElementById("question-number").innerHTML = '';
    document.getElementById("question-number").innerHTML += 'Question ' + (userLevel + 1);

    ////// USER LEVEL TEST: POP-UP (WILL NOT WORK)
    window.alert("userLevel is " + String(userLevel));

    // resets question ready to ask next question
    document.getElementById('question').innerHTML = '';

    // asks question in typewriter text
    let question = questionList[userLevel]
    // i here is simply an iterative variable to increase letters in typewriter fashion
    let i = 0
    function askQuestion(){
        setTimeout(function() {
            document.getElementById('question').innerHTML += question.charAt(i);
            i++;
            if (i < question.length) {
                askQuestion();
            }
        }, 100)
    }
    askQuestion()

    // defines appear function for later use
    // appear function code adapted from https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
    // to appear: num = 0 step = positive / to disappear: num = 100 step = negative
    function appear(element, num, step, speed){
            var t_o;
            t_o = setInterval(function(){
                var opacity = num / 100;
                num = num + step; 
                if(opacity > 1 | opacity < 0){
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
        document.getElementById('timer').innerHTML = '1:00';
        setTimeout(function() {    
            appear(document.getElementById('timer-box'), 0, 10, 50)
        }, 3000)
    }
    displayTimer()

    // displays answers after 4 seconds
    function displayAnswer(userLevel) {  
        
        // fades out previous answer on q2 and above, and then hides their shell
        if (userLevel > 0) {
            appear(answerBox[userLevel - 1], 100, -10, 50)
            setTimeout (function(){
                answerBox[userLevel - 1].style.display = "none";
            }, 600)
            answerBox[userLevel].style.display = "block";
        }
        // fades in answer after 4 seconds
        setTimeout(function() {  
            appear(answerBox[userLevel], 0, 10, 50)
        }, 4000)
    }
    displayAnswer(userLevel)
    
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
    submitButton[userLevel].onclick = function(){
        assessAnswer(userLevel, userScore);
        }   
}


// TEST FUNCTION
// document.getElementById("user-level").innerHTML = ' userLevel is ' + String(userLevel);

// assess whether correct and adjust user level/score or run fail modal
function assessAnswer(userLevel, userScore) {
    // answer variable defines the correct answer based on the question number (userLevel)
    let correctAnswer = correctAnswerList[userLevel];
    // targets input answer via the submit button according to different html form elements (each answer has its own form)
    let answerGiven = document.querySelector('input[name="' + answerSelector[userLevel] + '"]:checked').value
    // let aGiven = document.querySelector('input[name="q1"]:checked').value
        if (answerGiven == correctAnswer){
            userLevel ++;
            // userScore += seconds;
            // TEST FUNCTION
            document.getElementById("user-level").innerHTML += ' userLevel is ' + String(userLevel);
            return userLevel
        }
        else {
            failModal()
        }
}

// on question fail display fail modal
// (to add details based on userLevel/userScore)
function failModal(userLevel, userScore) {
    // opens modal on function run (closing modal not an option)
    document.getElementById("fmodal").style.display = "block";
}

// on question 11 correct answer display winner modal
// (to add details based on userLevel/userScore)
function weHaveAWinner(userLevel, userScore) {
    // opens modal on function run (closing modal not an option)
    document.getElementById("wmodal").style.display = "block";
}

