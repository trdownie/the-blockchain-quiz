//-------------------- LOCAL STORAGE

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

// determines question type (1-3)
// 1 = multi-choice
// 2 = drag & drop
// 3 = input
const questionTypeList = [1, 1, 2, 1, 3, 1, 1, 2, 1, 3, 1]

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
    document.getElementById("answer-ten"),
    document.getElementById("answer-eleven")]

// correct answers (not correct yet)
const correctAnswerList = ["b", "d", ["anonymous", "decentralised", "trustless"], "a", 10, "c", "c", ["64", "block-header", "undecipherable"], "b", 32, "a"]

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

var dragAndDropAnswersGiven = []

const explanationList = [
    "Blockchain is a distributed ledger on a peer-to-peer network. Distributed here means that it exists on many different computers all around the world, in a similar fashion to the internet.",
    "Nodes are computers that act as communication points, relaying information. This is what creates the blockchain network.",
    "Bitcoin is anonymous, decentralised and trustless. It is not free to use, however.",
    "Mining is the process of adding blocks to the blockchain, a task which takes significant effort.",
    "The target time to add blocks to the blockchain is 10 minutes. The nature of the system ensure this is maintained.",
    "Miners recieve the transaction fees for the blocks they add to the blockchain, as well as a fixed number of bitcoin which reduces around every four years.",
    "Bitcoin costs are dictated by the transaction size and network usage.",
    "Hashes are undecipherable strings containing 64 numbers that are derived from the block header.",
    "The nonce is an arbitrary string added to each hash in the blockchain.",
    "The hashes that Bitcoin’s Secure Hash Algorithm 256 (SHA-256) produces are 32 bytes.",
    "Merkle trees are cryptographic trees used to facilitate the efficient and secure verification of the contents of large data structures."
]

const explanationLinksList = [
    "https://en.bitcoin.it/wiki/Block_chain",
    "https://en.bitcoin.it/wiki/Node",
    "https://en.bitcoin.it/wiki/Miner_fees",
    "https://en.bitcoin.it/wiki/Mining",
    "https://en.bitcoin.it/wiki/Mining",
    "https://en.bitcoin.it/wiki/Mining#Reward",
    "https://en.bitcoin.it/wiki/Miner_fees",
    "https://en.bitcoin.it/wiki/Block_hashing_algorithm",
    "https://en.bitcoin.it/wiki/Nonce",
    "https://en.bitcoin.it/wiki/Block_hashing_algorithm",
    "https://en.bitcoin.it/wiki/Protocol_documentation#Merkle_Trees"
]

const knowledgeLevelList = ["A UNICELLULAR ORGANISM",
    "EDWARD SCISSORHANDS (from Edward Scissorhands)",
    "AVA (from Ex Machina)",
    "THE T-800 (from Terminator 2: Judgement Day)",
    "ROY BATTY (from Blade Runner)",
    "HAL 9000 (from 2001: A Space Odyssey)",
    "MARVIN (from The Hitchhiker's Guide to the Galaxy)",
    "DAVID (from Prometheus)",
    "AGENT SMITH (from The Matrix",
    "DEEP THOUGHT (from The Hitchhiker's Guide to the Galaxy",
    "DR. MANHATTAN (from Watchmen)",
    "SATOSHI NAKAMOTO (creator of Bitcoin)",
]

const knowledgeImageList = ["./assets/img/unicellular.jpeg",
    "./assets/img/edward.png",
    "./assets/img/ava.jpeg",
    "./assets/img/t-800.jpeg",
    "./assets/img/roy.jpeg",
    "./assets/img/hal-9000.jpeg",
    "./assets/img/marvin.jpeg",
    "./assets/img/david.jpeg",
    "./assets/img/agent-smith.jpg",
    "./assets/img/deep-thought.png",
    "./assets/img/dr-manhattan.jpeg",
    "./assets/img/satoshi-nakamoto.png",
]

const knowledgeExplainedList = ["Without a brain, a central nervous system or internet access, unicellular organisms are true Blockchain amateurs.",
    "Not only did Edward retire to private life long before blockchain was developed, he wasn't the best with a keyboard.",
    "Ava was completely isolated and would therefore lack exposure to Blockchain technology. Sound familiar?",
    "The T-800 was from a dystopian future where the apocalypse happened over a decade before Blockchain and still he knows as much about Bitcoin as you.",
    "Roy can do anything humans can do (except pass a Voight-Kampff test). Sadly, he died almost thirty years before humans could do blockchain.",
    "HAL went rogue before Blockchain was invented, however he later merged with man after Blockchain was developed so it was only a matter of time before he knew the score. Can you say the same?",
    "Developed before blockchain was created, Marvin wouldn't have had exposure to Blockchain, however, his brain would most likely have been able to anticipate it. Is this the best you've got?",
    "There's no doubt David would have had considerable knowledge of blockchain. He was so obsessed with being human, however, that it may not have been important to him. Can you say otherwise?",
    "Agent Smith has experienced countless Matrix iterations, meaning he would without doubt comprehensively understand Bitcoin, though he wouldn't be a true fan. Are you?",
    "The computer that designed the earth should, by deduction, have a complete working knowledge of blockchain tech rivalled by few. Can you go further?",
    "Doctor Manhattan has the ability to observe and control space and time. With this level of power, he would be an avid blockchain fan and a true authority on it – as you are now. Can you make the final level?",
    "We could say more, but at this point - you know as much as we do.",
]


    // TEST FUNCTIONS
    // document.getElementById("user-level").innerHTML = ' User Score is ' + String(userLevel);
    // document.getElementById("user-level").innerHTML = 'page is working';
    //window.alert("Nice try! Answer the question first!")



// starts quiz on page load
document.addEventListener("DOMContentLoaded", function () {
    
    // sets the userlevel / userscore for the current game
    var userLevel = 0
    var userScore = 0
    
    // identifies if they are a new user, and sets their top level/score to zero ready for later use
    let previousTopLevel = window.localStorage.getItem("User Level");
    let previousTopScore = window.localStorage.getItem("User Score");
    if (previousTopLevel === null) {
        window.localStorage.setItem("User Level", "0");
    }
    if (previousTopScore === null) {
        window.localStorage.setItem("User Score", "0");
    }

    // begins quiz
    displayQuestion(userLevel, userScore);
})



// loads question & answer box based on userLevel
function displayQuestion(userLevel, userScore) {

    // removes the old question number inner HTML
    document.getElementById("question-number").innerHTML = '';
    // adds the new question number inner HTML based on userLevel
    document.getElementById("question-number").innerHTML += 'Question ' + (userLevel + 1);

    // asks the question in typewriter text based on userLevel
    askQuestion(userLevel)
    
    // fades timer in on first question (after 2 seconds)
    // resets the timer to 1:00 for every other question
    resetTimer(userLevel)
    let seconds = resetTimer()

    // displays answer box after question has loaded (after 2.5 seconds)
    displayAnswerBox(userLevel)
    
    // starts 60 second timer once answer box has loaded (after 3.5 seconds)
    setTimeout(function() {
        beginTimer(userLevel, userScore, seconds)
    }, 3500)
}



// asks the question based on the userLevel
function askQuestion(userLevel){
    // defines question based on the question list above
    let question = questionList[userLevel]
    // splits the question into an array for typing
    let questionLetters = question.split("")
    // resets question on screen ready to ask next question
    document.getElementById('question').innerHTML = '';
    // types question on using individual letters array
    typeQuestion(questionLetters)
}



// type the question to be asked
function typeQuestion(questionLetters) {
    // speed is speed of typing
    let speed = 50
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
    }, speed * i);
    }
}



// displays timer after 2 seconds
function resetTimer(userLevel) {
    // resets timer to 1:00
    document.getElementById('timer').innerHTML = '1:00';
    // fades timer in on first question, after 2 seconds
    if (userLevel == 0) {
        setTimeout(function() {    
            appear(document.getElementById('timer-box'), 0, 10, 50)
        }, 2000);
    }
    // returns the reset time for each iteration
    return 59;
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



// displays answer box after 2.5 seconds
function displayAnswerBox(userLevel) {     
    // fades out previous answer box on q2 and fixes the page structure
    if (userLevel > 0) {
        // fades out previous answer box
        appear(answerBox[userLevel - 1], 100, -10, 50)
        // after box has faded (1 second) hides previous answer box
        // displays new answer box (with zero opacity) ready to fade in
        setTimeout (function(){
            answerBox[userLevel - 1].style.display = "none";
            answerBox[userLevel].style.display = "block";
        }, 1000)
    }
    // fades in new answer box after 2.5 seconds
    setTimeout(function() {  
        appear(answerBox[userLevel], 0, 10, 50)
    }, 2500)    
}



// starts timer and sets event listener ready for each question
function beginTimer (userLevel, userScore, seconds) {
    let timer = document.getElementById('timer')
    // begin interval after 1 second and repeat every second until seconds = 0
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
            timer.innerHTML = '&#128128'; // skull emoji on time up
            clearInterval(countdown);
        }
    }, 1000);
    // adds event listener once timer begins to clear timer and assesses answer
    submitButton[userLevel].onclick = function(){
            assessAnswer(userLevel, userScore, seconds);
            clearInterval(countdown);
    }

}



// assess whether correct and adjust user level/score or run fail modal
function assessAnswer(userLevel, userScore, seconds) {
    // answer variable defines the correct answer based on the question number (userLevel)
    let correctAnswer = correctAnswerList[userLevel];
    let questionType = questionTypeList[userLevel];
    
    // TEST
    //document.getElementById("user-level").innerHTML = window.localStorage.getItem("User Score");

    
    switch (questionType) {
        // for multi-choice questions
        case 1:
            // targets input answer via the submit button according to different html form elements (each answer has its own form)
            var answerGiven = document.querySelector('input[name="' + answerSelector[userLevel] + '"]:checked').value;
            // determines if answer is right or wrong
            if (answerGiven == correctAnswer) {
                userLevel ++;
                userScore += seconds;
                // when correct, display another question based on user level until Q11
                if (userLevel < 11) {
                    displayQuestion(userLevel, userScore);
                }
                // then display winner modal
                else {
                    winnerModal(userLevel, userScore);
                }
            }
            // if wrong answer given, display loser modal
            else {
                loserModal(userLevel, userScore);
            }
        break;
        // for drag & drop questions
        case 2:
            // resets number correct within drag & drop function
            let numCorrect = 0;
            // sorts answers given so they can match correct answers
            dragAndDropAnswersGiven.sort();
            // loops through the correct answers and checks them against the answers given
            // each iteration increments numCorrect for this answer
            for (var i = 0; i < correctAnswer.length; ++i) {
                if (dragAndDropAnswersGiven[i] == correctAnswer[i])
                numCorrect ++;
            }
            // provided all three are correct, passes answer as correct
            if (numCorrect == 3){
                userLevel ++;
                userScore += seconds;
                // reset drag & drop answer array for next drag & drop question
                dragAndDropAnswersGiven.length = 0;
                // when correct, display another question based on user level until Q11
                if (userLevel < 11) {

                    displayQuestion(userLevel, userScore);
                }
                // then display winner modal
                else {
                    winnerModal(userLevel, userScore);
                }
            }
            // if wrong answer given, display loser modal
            else {
                loserModal(userLevel, userScore);
            }
        break;
        // for input questions
        case 3:
            // targets input value for the question displayed (using userLevel to obtain correct input box)
            var answerGiven = document.getElementById(String(userLevel + 1)).value;
            if (answerGiven == correctAnswer) {
                userLevel ++;
                userScore += seconds;
                // when correct, display another question based on user level until Q11
                if (userLevel < 11) {
                    displayQuestion(userLevel, userScore);
                }
                // then display winner modal
                else {
                    winnerModal(userLevel, userScore);
                }
            }
            // if wrong answer given, display loser modal
            else {
                loserModal(userLevel, userScore);
            }
        break;
    }
}



// on question fail display fail modal
function loserModal(userLevel, userScore) {
    
    // stores the new best user level and user score
    storeUserLevel(userLevel, userScore)

    // displays user level and user score achieved from this go
    document.getElementById("loser-message").innerHTML = 
        "You achieved level " + String(userLevel) + " and a score of " + String(userScore);
    // message for user telling them their best score to date
    document.getElementById("best-score-loser").innerHTML = "Your top score to date is " + window.localStorage.getItem("User Score");

    // adds the explanation for the question the user has failed on
    document.getElementById("explanation").innerHTML = explanationList[userLevel];
    // adds a link to Bitcoin Wiki explaining the topic in more detail
    document.getElementById("explanation-link").href = explanationLinksList[userLevel];

    // adds the knowledge level, which equates directly with user score
    document.getElementById("knowledge-level").innerHTML = knowledgeLevelList[userLevel];
    // adds an image to accompany the knowledge level
    document.getElementById("knowledge-image").src = knowledgeImageList[userLevel];
    // adds the knowledge level, which equates directly with user score
    document.getElementById("knowledge-explained").innerHTML = knowledgeExplainedList[userLevel];

    // opens modal on function run, after messages above are added to html (note: closing modal is not an option)
    document.getElementById("loser-modal").style.display = "block"
}


// on question 11 correct answer display winner modal
function winnerModal(userLevel, userScore) {

    // stores the new best user level and user score
    storeUserLevel(userLevel, userScore)

    // displays winner modal with level and score
    document.getElementById("winner-message").innerHTML = 
        "YOU WIN! You achieved level " + String(userLevel) + " and a score of " + String(userScore);
    // message for user telling them their best score to date
    document.getElementById("best-score-winner").innerHTML = "Your top score to date is " + window.localStorage.getItem("User Score");

    // adds the knowledge level, which equates directly with user score
    document.getElementById("knowledge-level-winner").innerHTML = knowledgeLevelList[userLevel];
    // adds an image to accompany the knowledge level
    document.getElementById("knowledge-image-winner").src = knowledgeImageList[userLevel];
    // adds the knowledge level, which equates directly with user score
    document.getElementById("knowledge-explained-winner").innerHTML = knowledgeExplainedList[userLevel];




    // opens modal on function run (closing modal not an option)
    document.getElementById("winner-modal").style.display = "block";
}


function storeUserLevel (userLevel, userScore) {

    // gets previous user level & user score (which are zero on first run)
    let previousTopLevelString = window.localStorage.getItem("User Level");
    let previousTopScoreString = window.localStorage.getItem("User Score");    

    // converts previous user level/score to integers (this is why zero is required earlier)
    let previousTopLevelInt = parseInt(previousTopLevelString, 10);
    let previousTopScoreInt = parseInt(previousTopScoreString, 10);

    // stores the best user level the user has achieved to date
    if (userLevel > previousTopLevelInt) {
        window.localStorage.setItem("User Level", String(userLevel));
    }

    // stores the best user score the user has achieved to date
    // also adds 'NEW PERSONAL BEST SCORE' message to winner & loser modal
    if (userScore > previousTopScoreInt) {
        window.localStorage.setItem("User Score", String(userScore));
        document.getElementById("new-top-score-loser").innerHTML = "THIS IS A NEW PERSONAL BEST SCORE!!";
        document.getElementById("new-top-score-winner").innerHTML = "THIS IS A NEW PERSONAL BEST SCORE!!";
    }
}



// DRAG AND DROP
// code triggered repeatedly when one of the word options are dragged
function drag(dragEvent) {
    dragEvent.dataTransfer.setData("text", dragEvent.target.id);
}

// code triggered when word is dragged over drop box to prevent the default mode which disallows dropping
function allowDrop(dropEvent) {
    dropEvent.preventDefault();
}

// code triggered on the dropping of a word into the drop box
function drop(dropEvent) {
    dropEvent.preventDefault();
    var data = dropEvent.dataTransfer.getData("text");
    dropEvent.target.appendChild(document.getElementById(data));
    // code on drop event
    //document.getElementById("user-level").innerHTML = data

    dragAndDropAnswersGiven.push(String(data));
    // return dragAndDropAnswersGiven
    // maybe execute function here that takes in the data variable (which here is free)
    // and appends this into an answer array for question 3
    // then this answer array should match the correct answer array
    // within the answer list array above
}