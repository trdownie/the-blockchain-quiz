//-------------------- COOKIES
//---------- set achieved level (on question fail)
function storeLevel(level) {
  document.cookie = userLevel + "=" + level + ";path=/";
}

//-------------------- QUIZ

// array of questions to ask user
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

// array of answer forms taken from html
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

// array of correct answers (not correct yet)
const correctAnswer = [
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b"]

//var answerGiven = document.querySelector('input[name="q1"]:checked').value


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
    }
    displayQuestion(userLevel, userScore)

    // TEST FUNCTION
    document.getElementById("user-level").innerHTML = ' userLevel is ' + String(userLevel);

    // assess whether correct and adjust user level/score or run fail modal
    function assessAnswer(userLevel, userScore) {
        let a = correctAnswer[userLevel]
        var answerGiven = document.querySelector('input[name="q1"]:checked').value
            if (answerGiven == a){
                userLevel ++;
                // userScore += seconds;

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