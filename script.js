
    let i1 = 0;
    let i2 = 0;
document.addEventListener("DOMContentLoaded", function(){ welcomeIntro()

function welcomeIntro(){
    let welcomeNew = 'Welcome to';
    let title = '\n The Blockchain Quiz';
    let invite = '<br><br>Shall we begin?';
    let speed = 100;
    let lineBreak = document.createElement("br");

    if (i1 < welcomeNew.length) {
        document.getElementById("welcome-message").innerHTML += welcomeNew.charAt(i1);
        i1++;
        setTimeout(welcomeIntro, speed);
    }
    else {
        setTimeout(function() {
        document.getElementById("welcome-message").append(lineBreak);
        document.getElementById("welcome-message").append(title);
    }, 1000);
    }
}
}
)