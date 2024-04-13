let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
   // rock , paper, scissors
}

const drawGame = () => {
    
        console.log("Game draw!");
        msg.innerText = "Game draw!";
        msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userscore.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compscore.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
} 

const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    //Generate computer choice ->modular
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice) 
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false :true ;
        }
        else {
            userWin = compChoice === "rock" ? false : true ; 
        }

        showWinner(userWin , userChoice, compChoice);
    }
}


choices.forEach((choice) => {
        choice.addEventListener("click" , () => {
            const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});