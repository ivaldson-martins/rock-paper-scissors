let counterComputer = 0;
let counterPlayer = 0;
const message = document.querySelector('.message');
const divResults = document.querySelector('.score');

message.textContent = "Clique em qualquer botao para começar";
divResults.textContent = '\nHuman ' + counterPlayer + ' : ' + counterComputer + ' Machine';

function computerPlay() {
   let arrayDeJogadas = ['rock', 'paper', 'scissors'];
   let jogada = arrayDeJogadas[Math.floor(Math.random() * arrayDeJogadas.length)];
   return jogada;
}

function playRound(e) {
   let computerSelection = computerPlay();
   let playerSelectionConverted = e.srcElement.id;
   // imprime as jogadas do computador e as minhas no console
   console.log(computerSelection, playerSelectionConverted);
   if (playerSelectionConverted === computerSelection) {
      score("It's a tie!");
   }
   if (playerSelectionConverted == 'rock' && computerSelection == 'scissors') {
      score('You win! Rock beats scissors');
   } else if (playerSelectionConverted == 'rock' && computerSelection == 'paper') {
      score('You lose! Paper beats Rock');

   } else if (playerSelectionConverted == 'paper' && computerSelection == 'scissors') {
      score('You lose! scissors beats paper');

   } else if (playerSelectionConverted == 'paper' && computerSelection == 'rock') {
      score('You win! Paper beats Rock');

   } else if (playerSelectionConverted == 'scissors' && computerSelection == 'paper') {
      score('You win! scissors beats paper');
   } else if (playerSelectionConverted == 'scissors' && computerSelection == 'rock') {
      score('You lose! Rock beats scissors');
   }
}

function score(resultRound) {
   let text = '';
   if (resultRound.search('win') != -1) {
      ++counterPlayer;
      text = 'The humam have won the round';
   } else if (resultRound.search('lose') != -1) {
      ++counterComputer;
      text = 'The machines have won the round';
   } else {
      text = "It's a tie";
   }
   checkVictory();
   message.textContent = text;
   divResults.textContent = '\nHuman ' + counterPlayer + ' : ' + counterComputer + ' Machine';
}

function checkVictory() {
   if (counterComputer===5 || counterPlayer===5){
      message.textContent = "Clique em qualquer botao para começar";
      if (counterPlayer > counterComputer) {
         alert('The humam have won the match');
      } else if (counterPlayer < counterComputer) {
         alert('The machines have won the match');
      }
      
      counterPlayer = 0;
      counterComputer = 0;
   }
}

function game() {
   const buttons = document.querySelectorAll('button');
   buttons.forEach((button) => {
      button.addEventListener('click', playRound);
   });
}

game();
