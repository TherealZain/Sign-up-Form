let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");



function plusOne(button) {
    var targetId = button.getAttribute("data-target");
    var score = document.getElementById(targetId);
    
    var scoreText = score.textContent
    
    let scoreNumber = Number(scoreText);
    
    scoreNumber = 1 + scoreNumber;
    
    score.textContent = scoreNumber;
    
    highlightLeader();
    
}


function plusTwo(button) {
    
    var targetId = button.getAttribute("data-target");
    var score = document.getElementById(targetId);
    
    var scoreText = score.textContent
    
    let scoreNumber = Number(scoreText);
    
    scoreNumber = 2 + scoreNumber;
    
    score.textContent = scoreNumber;
    
    highlightLeader();
}


function plusThree(button) {
    
    var targetId = button.getAttribute("data-target");
    var score = document.getElementById(targetId);
    
    var scoreText = score.textContent
    
    let scoreNumber = Number(scoreText);
    
    scoreNumber = 3 + scoreNumber;
    
    score.textContent = scoreNumber;
    
    highlightLeader();
}

function highlightLeader() {
    let homeAsNum = Number(homeScore.textContent);
    let guestAsNum = Number(guestScore.textContent);
    
    if(homeAsNum > guestAsNum){
        homeScore.classList.add("highlight");
        guestScore.classList.remove("highlight");
        
    } 
     else{
        guestScore.classList.add('highlight');
         homeScore.classList.remove("highlight");
    }
    
    
    
}