let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")

const genCompChoice= () => 
{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};
const drawGame=()=>
{
    //console.log("draw");
    msg.innerText="draw, play again!";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin, userChoice, compChoice)=>
{
if(userWin)
{
    userScore++;
    userScorePara.innerText=userScore;
    //console.log("you win!");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    //console.log("you lose!");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
};

const playGame=(userChoice)=>{
console.log("user choice=",userChoice);
const compChoice=genCompChoice();
console.log("computer choice =", compChoice);
if(userChoice===compChoice)
{
    drawGame();
}
else 
{
    let userWin=true;
    if(userChoice==="rock")
    {
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) => {
    
      //console.log(choice);
      choice.addEventListener("click",()=>
      {
        const userChoice= choice.getAttribute("id");
        console.log("choice was made",userChoice);
        playGame(userChoice);
      });
    
  });