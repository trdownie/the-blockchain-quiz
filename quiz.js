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
let userLevel = 0
// default userScore, increasing by time on clock as each question answered
let userScore = 0



document.addEventListener("DOMContentLoaded", function () {

    // TEST FUNCTION
    // document.getElementById("user-level").innerHTML = ' userLevel is ' + String(userLevel);
    document.getElementById("user-level").innerHTML = 'page is working';
})


// starts quiz on page load
document.addEventListener("DOMContentLoaded", function () {

    // TEST FUNCTION
    //document.getElementById("user-level").innerHTML = ' userLevel is ' + String(userLevel);
    // USER LEVEL TEST: POP-UP
    //window.alert("userLevel is " + String(userLevel));
    displayQuestion(0);



    /*
    let buttons = document.getElementsByClassName("button-box");

    for (let button of buttons) {
        button.onclick = function(){
            
            // document.getElementById("user-level").innerHTML += '       quiz is working';        

            assessAnswer(userLevel);
            let userLevel = assessAnswer(userLevel);
            if (userLevel < 11) {
                displayQuestion(userLevel)
            }
            else {
                weHaveAWinner(userLevel)
            }
            
        }   
    }
    */
})


// loads question & answer box based on userLevel
function displayQuestion(userLevel) {
    
    // removes the old question number inner HTML
    document.getElementById("question-number").innerHTML = '';

    // adds the new question number inner HTML based on userLevel
    document.getElementById("question-number").innerHTML += 'Question ' + (userLevel + 1);

    // asks the question in typewriter text based on userLevel
    askQuestion(userLevel)

    // displays/resets the timer at 1:00 for every question
    resetTimer()

    // displays answer box after 4 seconds based on userLevel
    displayAnswerBox(userLevel)
    
    // starts 60 second timer once answer has loaded (5 seconds)
    setTimeout(function() {
        beginTimer()
    }, 5000)
}




function askQuestion(userLevel){
    // defines question based on the question list above
    let question = questionList[userLevel]
    // splits the question into an array for typing
    let questionLetters = question.split("")
    // resets question on screen ready to ask next question
    document.getElementById('question').innerHTML = '';

    typeQuestion(questionLetters)
}

// type the question to be asked
function typeQuestion(questionLetters) {
    // i used here for iteration purposes
    let i = 0
    // function to iterate through the letters of the question in array form 
    for (letter of questionLetters) {
        type(letter, i);
        i++;
    }
    // function called above that types each letter and iterates
    function type(letter, i) {
    setTimeout(function() {
        document.getElementById('question').innerHTML += letter;
    }, 50 * i);
    }
}

// displays timer after 3 seconds
function resetTimer() {
    document.getElementById('timer').innerHTML = '1:00';
    setTimeout(function() {    
        appear(document.getElementById('timer-box'), 0, 10, 50)
    }, 3000)
}



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


// displays answer box after four seconds
function displayAnswerBox(userLevel) {     
    // fades out previous answer on q2 and above, and then hides the element for page structure
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

    // adds event listener to the newly appeared button
    submitButton[userLevel].onclick = function(){
            assessAnswer(userLevel);
    }
}


// starts timer after 5 seconds (giving time for answer box to load)
function beginTimer () {
    // begin interval that begins after 1 second and repeats every second until seconds = 0
    let timer = document.getElementById('timer')
    let buttonBox = document.getElementsByClassName('button-box')
    let seconds = 59
    let countdown = setInterval(function(){
        if (seconds > 9) {
            timer.innerHTML = '0:' + seconds;
            seconds-- ;
        }
        else if (seconds < 10 & seconds > 0){
            timer.innerHTML = '0:0' + seconds;
            seconds-- ;
            }
        else {            
            timer.innerHTML = '&#128128';
            clearInterval(countdown);
        }
    }, 1000);

}



// assess whether correct and adjust user level/score or run fail modal
function assessAnswer(userLevel) {
    // answer variable defines the correct answer based on the question number (userLevel)
    let correctAnswer = correctAnswerList[userLevel];
    // targets input answer via the submit button according to different html form elements (each answer has its own form)
    let answerGiven = document.querySelector('input[name="' + answerSelector[userLevel] + '"]:checked').value
    // let aGiven = document.querySelector('input[name="q1"]:checked').value
        if (answerGiven == correctAnswer){
            userLevel ++;
            // userScore += seconds;
            // TEST FUNCTION
            document.getElementById("user-level").innerHTML += ' CORRECT ' + String(userLevel);
            displayQuestion(userLevel);
        }
        else {
            loserModal(userLevel)
        }
}


// on question fail display fail modal
// (to add details based on userLevel/userScore)
function loserModal(userLevel) {
    // opens modal on function run (closing modal not an option)
    document.getElementById("loser-message").innerHTML = "YOU LOSE! You achieved level " + String(userLevel);

    document.getElementById("loser-modal").style.display = "block";
}


// on question 11 correct answer display winner modal
// (to add details based on userLevel/userScore)
function winnerModal(userLevel, userScore) {
    // opens modal on function run (closing modal not an option)
    document.getElementById("winner-modal").style.display = "block";
}
