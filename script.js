//function for each button that sets user selection as that item
//when button pressed, trigger the computer selection
//when computer selection done, compare user and computer choices
//update score

var userSelection;
var compSelection;
var userScore = 0;
var compScore = 0;
var tieScore = 0;

var amountOfPlays = 0;


//1 = rock
//2 = paper
//3 = scissors

function OnButtonPressed(value)
{
    userSelection = Number(value);

    ComputerTurn();
}

function ComputerTurn()
{
    compSelection = Number(Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1));

    CompareChoices();
}

function CompareChoices()
{
    //check if tie
    if (userSelection === compSelection)
    {
        tieScore++;
        UpdateScoreboard();
    }
    //if user plays rock
    else if (userSelection === 1)
    {
        //computer wins with paper
        if (compSelection === 2)
        {
            compScore++;
            UpdateScoreboard();
        }
        //computer loses with scissors
        else if (compSelection === 3)
        {
            userScore++;
            UpdateScoreboard();
        }
    }
    //if user plays paper
    else if (userSelection === 2)
    {
        //computer loses with rock
        if (compSelection === 1)
        {
            userScore++;
            UpdateScoreboard();
        }
        //computer wins with scissors
        else if (compSelection === 3)
        {
            compScore++;
            UpdateScoreboard();
        }
    }
    //if user plays scissors
    else if (userSelection === 3)
    {
        //computer loses with paper
        if (compSelection === 2)
        {
            userScore++;
            UpdateScoreboard();
        }
        //computer wins with rock
        else if (compSelection === 1)
        {
            compScore++;
            UpdateScoreboard();
            
        }
    }
}

function UpdateScoreboard()
{
    let scoreboard = document.getElementById("scoreboard");

    //update the history first
    AddHistory(userSelection, compSelection);

    //update actual scoreboard text
    scoreboard.innerHTML = `<strong>You - ${userScore}, Computer - ${compScore}, Tie - ${tieScore}</strong>`;

    //update number of plays
    amountOfPlays++;
    
}

function AddHistory(user, computer)
{
    let historyDiv = document.getElementById("moveHistory");

    //convert index of selection to visible text for user
    let userItemName;
    let compItemName;

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


    //add a new history item
    let newHistoryItem = document.createElement("p");
    newHistoryItem.innerText = (`${amountOfPlays}.You - ${userItemName}, Computer - ${compItemName}`);
    historyDiv.append(newHistoryItem);
}
