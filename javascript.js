const computerChoiceDisplay = document.getElementById ('computer-choice')
const yourChoiceDisplay = document.getElementById ('your-choice')
const resultDisplay = document.getElementById ('result')
const possibleChoices = document.querySelectorAll('button')

let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => 
{
    computerChoiceDisplay.innerHTML = '...'
    resultDisplay.innerHTML = '...'
    yourChoice = e.target.id
    if(e.target.id===""){
        yourChoice = e.target.parentElement.id
    }
    yourChoiceDisplay.innerHTML = yourChoice
    setTimeout(generateComputerChoice, 1000);
    setTimeout(getResult, 1000)

}))

function generateComputerChoice() {
    
    const randomNumber = Math.floor(Math.random() * 3) 
    console.log (randomNumber)
    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

computerChoiceDisplay.innerHTML = computerChoice

}


function getResult () {
    if (computerChoice === yourChoice) {
        result = "It's a draw!"
    }

    if (computerChoice === 'rock' && yourChoice === 'paper' ) {
        result = "You win!"
    }

    if (computerChoice === 'rock' && yourChoice === 'scissors' ) {
        result = "You lost!"
    }

    if (computerChoice === 'paper' && yourChoice === 'scissors' ) {
        result = "You win!"
    }

    if (computerChoice === 'paper' && yourChoice === 'rock' ) {
        result = "You lost!"
    }
 
    if (computerChoice === 'scissors' && yourChoice === 'rock' ) {
        result = "You win!"
    }

    if (computerChoice === 'scissors' && yourChoice === 'paper' ) {
        result = "You lost!"
    }

    resultDisplay.innerHTML = result;
}