//function for each button that sets user selection as that item
//when button pressed, trigger the computer selection
//when computer selection done, compare user and computer choices
//update score


//Caleb
var userSelection;
var compSelection;
var userScore = 0;
var compScore = 0;
var tieScore = 0;

var amountOfPlays = 1;

let userItemName;
let compItemName;

let lastWinner = "";


//1 = rock
//2 = paper
//3 = scissors

//update scoreboard on start
InitializeScoreboard();

function InitializeScoreboard()
{
    let scoreboard = document.getElementById("scoreboard");

    //update actual scoreboard text
    scoreboard.innerHTML = `<strong>You - ${userScore} | Computer - ${compScore} | Tie - ${tieScore}</strong>`;
    
}

//when user pushes button on page, assigns that value and triggers computer turn
function OnButtonPressed(value)
{
    userSelection = Number(value);

    ComputerTurn();
}

//gets random computer value and then compares to player
function ComputerTurn()
{
    //ensures the computer selects a new one each time
    let previousSelection = compSelection;
    while (compSelection === previousSelection)
    {
        compSelection = Number(Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1));

    }

    CompareChoices();
}

//compares the user input and computer input
function CompareChoices()
{
    //check if tie
    if (userSelection === compSelection)
    {
        tieScore++;
        lastWinner = "TIE!";
        SelectionAnimation();
    }
    //if user plays rock
    else if (userSelection === 1)
    {
        //computer wins with paper
        if (compSelection === 2)
        {
            compScore++;
            lastWinner = "COMPUTER Wins!";
            SelectionAnimation();
        }
        //computer loses with scissors
        else if (compSelection === 3)
        {
            userScore++;
            lastWinner = "YOU Win!";
            SelectionAnimation();
        }
    }
    //if user plays paper
    else if (userSelection === 2)
    {
        //computer loses with rock
        if (compSelection === 1)
        {
            userScore++;
            lastWinner = "YOU Win!";
            SelectionAnimation();
        }
        //computer wins with scissors
        else if (compSelection === 3)
        {
            compScore++;
            lastWinner = "COMPUTER Wins!";
            SelectionAnimation();
        }
    }
    //if user plays scissors
    else if (userSelection === 3)
    {
        //computer loses with paper
        if (compSelection === 2)
        {
            userScore++;
            lastWinner = "YOU Win!";
            SelectionAnimation();
        }
        //computer wins with rock
        else if (compSelection === 1)
        {
            compScore++;
            lastWinner = "COMPUTER Wins!";
            SelectionAnimation();
            
        }
    }
}

//changes the scoreboard text to reflect score and updates history too
function UpdateScoreboard()
{
    let scoreboard = document.getElementById("scoreboard");

    //update the history first
    AddHistory(userSelection, compSelection);

    //update actual scoreboard text
    scoreboard.innerHTML = `<strong>YOU - ${userScore} | COMPUTER - ${compScore} | TIE - ${tieScore}</strong>`;

    //update number of plays
    amountOfPlays++;
    
}

//puts element in the history box
function AddHistory(user, computer)
{
    let historyDiv = document.getElementById("moveHistory");


    //add a new history item
    let newHistoryItem = document.createElement("p");
    newHistoryItem.innerText = (`${amountOfPlays}. YOU - ${userItemName} | COMPUTER - ${compItemName}`);
    historyDiv.append(newHistoryItem);

    //scroll to bottom so newest move is visible
    historyDiv.scrollTop = historyDiv.scrollHeight;
}

function SetItemNames()
{
    //convert index of selection to visible text for user
    if (userSelection === 1)
        userItemName = "Rock";
    else if (userSelection === 2)
        userItemName = "Paper";
    else if (userSelection === 3)
        userItemName = "Scissors";

    if (compSelection === 1)
        compItemName = "Rock";
    else if (compSelection === 2)
        compItemName = "Paper";
    else if (compSelection === 3)
        compItemName = "Scissors";
}

//plays after user selects box to give time for code to update and display computer selection to user
async function SelectionAnimation()
{
    let buttons = document.getElementById("btn");
    let animationText = document.getElementById("animText");

    SetItemNames();

    //hide buttons
    buttons.style.display = "none";
    animationText.style.display = "block";

    animationText.innerHTML = `<p>${userItemName}</p>`;
    await sleep(1000);
    animationText.innerHTML = `<p>${userItemName} vs</p>`;
    await sleep(1000);
    animationText.innerHTML = `<p>${userItemName} vs ${compItemName}</p>`;
    await sleep(2000);

    //display winner
    animationText.innerHTML = `<p>${lastWinner}</p>`;
    await sleep(2000);

    //show buttons again
    buttons.style.display = "flex";
    animationText.style.display = "none";

    UpdateScoreboard();
}

//used for waiting for time
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//reloads page on game reset button
function ResetGame()
{
    window.location.reload();
}
