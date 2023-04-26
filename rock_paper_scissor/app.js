//pick out the elements(for example, here, its span) with the ids
const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoice=document.querySelectorAll('button') //select by class
let userChoice
let computerChoice 

//events
//to display user choice
possibleChoice.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1 //if 1 is not added it gives 0 to 2 adding 1 give 1 to 3
    if(randomNumber===1){
        computerChoice='rock'
    }
    if(randomNumber===2){
        computerChoice='paper'
    }
    if(randomNumber===3){
        computerChoice='scissor'
    }

    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice===userChoice){
        result='It is a draw'
    }
    if(computerChoice==='rock' && userChoice==='paper'){
        result='Your win!'
    }
    if(computerChoice==='rock' && userChoice==='scissor'){
        result='Your lost!'
    }
    if(computerChoice==='paper' && userChoice==='scissor'){
        result='Your win!'
    }
    if(computerChoice==='paper' && userChoice==='rock'){
        result='Your lost!'
    }
    if(computerChoice==='scissor' && userChoice==='rock'){
        result='Your win!'
    }
    if(computerChoice==='scissor' && userChoice==='paper'){
        result='Your lost!'
    }
    resultDisplay.innerHTML=result
}

