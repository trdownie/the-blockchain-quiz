    let i = 0;
    let j = 0;
    let welcomeNew = 'Welcome to';
    let title = 'The Blockchain Quiz';
    let invitation = 'Shall we begin?';
    let speed = 100;
    let lineBreak = document.createElement("br");

function invite(){
    if (j < invitation.length) {
        document.getElementById("welcome-message").innerHTML += invitation.charAt(j);
        j++;
        setTimeout(invite, speed);
    }
}

function welcomeIntro(invite){
    if (i < welcomeNew.length) {
        document.getElementById("welcome-message").innerHTML += welcomeNew.charAt(i);
        i++;
        setTimeout(welcomeIntro, speed);
    }
    else {
        setTimeout(function() {
        document.getElementById("welcome-message").append(lineBreak);
        document.getElementById("welcome-message").append(title);
    }, 500);
    invite()
    }
}

//this begins wecomeIntro() once DOM has loaded page content
document.addEventListener("DOMContentLoaded", function(){ welcomeIntro(invite)
})