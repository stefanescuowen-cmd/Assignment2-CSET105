//function for each button that sets user selection as that item
//when button pressed, trigger the computer selection
//when computer selection done, compare user and computer choices
//update score

var userSelection;
var compSelection;
var userScore;
var compScore;
var tieScore;

//1 = rock
//2 = paper
//3 = scissors

function OnButtonPressed(value)
{
    userSelection = value;

    ComputerTurn();
}

function ComputerTurn()
{
    compSelection = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1);
}

function CompareChoices()
{
    //check if tie
    if (userSelection === compSelection)
    {
        tieScore++;
    }
    //if user plays rock
    else if (userSelection === 1)
    {
        //computer wins with paper
        if (compSelection === 2)
        {
            compScore++;
        }
        //computer loses with scissors
        else if (compSelection === 3)
        {
            userScore++;
        }
    }
    //if user plays paper
    else if (userSelection === 2)
    {
        //computer loses with rock
        if (compSelection === 1)
        {
            userScore++;
        }
        //computer wins with scissors
        else if (compSelection === 3)
        {
            compScore
        }
    }
    //if user plays scissors
    else if (userSelection === 3)
    {
        //computer loses with paper
        if (compSelection === 2)
        {
            userScore++;
        }
        //computer wins with rock
        else if (compSelection === 1)
        {
            compScore++;
        }
    }
}

function UpdateScoreboard()
{
    let scoreboard = document.getElementById("scoreboard");

    scoreboard.innerText = (`You - ${userScore}, Computer - ${compScore}, Tie - ${tieScore}`);
    
}
