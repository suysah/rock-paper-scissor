const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let rezult

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 ) + 1
    
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice)
    {
        rezult = "Its a draw!"
    }
    if(computerChoice === 'Rock' && userChoice === "Paper")
    {
        rezult = "You win!"
    }
    if(computerChoice === 'Rock' && userChoice=== "Scissors")
    {
        rezult = "You lose!"
    }
    if(computerChoice === 'Paper'  && userChoice==="scissors")
    {
        rezult = "You win!"
    }
    if(computerChoice === 'Paper'  && userChoice==="Rock")
    {
        rezult = "You lose!"
    }
    if(computerChoice === 'scissors' && userChoice==="Paper")
    {
        rezult = "You win!"
    }
    if(computerChoice === 'scissors'  && userChoice==="Rock")
    {
        rezult = "You lose!"
    }

    resultDisplay.innerHTML = rezult
}