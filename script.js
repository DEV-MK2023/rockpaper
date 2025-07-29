const choices=["rock","paper","scissors"];
const userscore=document.querySelector(".userscore");
const compscore=document.querySelector(".compscore");
const playerDisplay=document.querySelector("#playerDisplay");
const computerDisplay=document.querySelector("#computerDisplay");
const resultDisplay=document.querySelector(".resultDisplay");
let userScore=0;
let computerscore=0;
function playgame(playerchoice) {
    const compchoice = choices[Math.floor(Math.random() * 3)];
    let result="";

    if(playerchoice===compchoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(compchoice==="scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result=(compchoice==="rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result=(compchoice==="paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
    playerDisplay.textContent=`Your Choice 🫵:   ${playerchoice}`;
    computerDisplay.textContent=`Computer's Choice 💻:   ${compchoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText","redText","blueText");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            userScore++;
            userscore.textContent=userScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerscore++;
            compscore.textContent=computerscore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("blueText");
            break;
    }

}
