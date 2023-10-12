function playRock() {
    computerChoice = Math.floor(Math.random() * 10);
    computerMove = ''
    if (computerChoice <= 4) {
        computerMove += 'Rock';
    }
    else if (computerChoice <= 6) {
        computerMove += 'Paper';
    }
    else if (computerChoice < 10) {
        computerMove += 'Scissor';
    }

}

let value;
function buttonSelectionRock() {
const choiceBtnRock = document.getElementById('rockid')
let textRock = choiceBtnRock.innerHTML;
if (choiceBtnRock.onclick) {
    value = textRock;
}
console.log(value);
}


function buttonSelectionPaper() {
    const choiceBtnPaper =  document.getElementById('paperid');
    let textPaper = choiceBtnPaper.innerHTML;
    if (choiceBtnPaper.onclick) {
        value = textPaper;
    }
    console.log(value);
}

function buttonSelectionScissor() {
    const choiceBtnScissor =  document.getElementById('scissorid');
    let textScissor = choiceBtnScissor.innerHTML;
    if (choiceBtnScissor.onclick) {
        value = textScissor;
    }
    console.log(value);
}


playerScore = 0;
computerScore = 0;
function eve() {
    let count = 5;
    let finalResult = '';
    let message = '';
    let result = '';
    let finalValue = value;
    playRock();
    if (computerMove === finalValue) {
        result += 'tie';
        finalResult += 'Tie'
        message += (`You chose ${finalValue}. Computer chose ${computerMove}. You ${result}`);
    }
    else if ((computerMove === 'Scissor' & finalValue === 'Paper') | (computerMove === 'Rock' & finalValue === 'Scissor') | computerMove === 'Paper' & finalValue === 'Rock') {
        result += 'lose';
        finalResult += 'You lose';
        message += (`You chose ${finalValue}. Computer chose ${computerMove}. You ${result}`);
    }
    else if ((computerMove === 'Rock' & finalValue === 'Paper') | (computerMove === 'Scissor' & finalValue === 'Paper') | (computerMove === 'Scissor' & finalValue === 'Rock') | computerMove === 'Paper' & finalValue === 'Scissor') {
        result += 'win';
        finalResult += 'You win';
        message += (`You chose ${finalValue}. Computer chose ${computerMove}. You ${result}`);
    }

    if (finalResult === 'You win') {
        playerScore ++;
    }
    else if (finalResult === 'You lose') {
        computerScore ++;
    }
    else if (finalResult === 'Tie') {
        playerScore ++;
        computerScore ++;
    
    }
    document.querySelector('.js-page')
    .innerHTML = `${(message)}`;
    document.querySelector('.js-result')
    .innerHTML = `${(finalResult)}`;
    for (i = 0; i <= 5; i++) {
    document.querySelector('.js-score')
    .innerHTML = `Your score: ${(playerScore)}, Computer score: ${(computerScore)}`;
    }
   
}

