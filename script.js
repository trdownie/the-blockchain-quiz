//-------------------- WELCOME MESSAGE ANIMATION
//---------- Variables
    let i = 0;
    let j = 0;
    let welcomeNew = 'Welcome to';
    let title = 'The Blockchain Quiz';
    let invitation = 'Shall we begin?';
    let speed = 100;
    let lineBreak = document.createElement("br");
//---------- Main function
function welcomeIntro(){
//----- step 1: adds welcome message letter by letter
    if (i < welcomeNew.length) {
        document.getElementById("welcome-message").innerHTML += welcomeNew.charAt(i);
        i++;
        setTimeout(welcomeIntro, speed);
    }
//----- step 2: adds the title in one go
    else if (i = welcomeNew.length) {
        setTimeout(function() {
        document.getElementById("welcome-message").append(lineBreak);
        document.getElementById("welcome-message").append(title);
        i++;;
    }, 500);
    }
//----- step 3: adds the invitation letter by letter (NOT WORKING!!!)
    else if (j < welcomeNew.length) {
        document.getElementById("invite").innerHTML += invitation.charAt(j);
        j++;
        setTimeout(welcomeIntro, speed);
    }
}
//----- this begins the function once DOM has loaded page content
document.addEventListener("DOMContentLoaded", function(){ welcomeIntro(invite)
})