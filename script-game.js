function computerPlay() {
    let arrayDeJogadas = ['rock', 'paper', 'scissors'];
    let jogada = arrayDeJogadas[Math.floor(Math.random()*arrayDeJogadas.length)];
    return jogada;
 }
 function playRound(playerSelection, computerSelection) {
    let playerSelectionConverted = playerSelection.toLowerCase();
    if (playerSelectionConverted === computerSelection) {
       return "It's a tie!";
    }
    if (playerSelectionConverted == 'rock' && computerSelection == 'scissors') {
       return 'You win! Rock beats scissors';
    } else if (playerSelectionConverted == 'rock' && computerSelection == 'paper') {
       return 'You lose! Paper beats Rock';

    } else if (playerSelectionConverted == 'paper' && computerSelection == 'scissors') {
       return 'You lose! scissors beats paper';

    } else if (playerSelectionConverted == 'paper' && computerSelection == 'rock') {
       return 'You win! Paper beats Rock';

    } else if (playerSelectionConverted == 'scissors' && computerSelection == 'paper') {
       return 'You win! scissors beats paper';
    } else if (playerSelectionConverted == 'scissors' && computerSelection == 'rock') {
       return 'You lose! Rock beats scissors';
    }
 }
 function game() {
    let counterPlayer = 0;
    let counterComputer = 0;
    let resultRound = '';
    let playHuman = '';
    for (let i = 0; i < 5; i++) {
       playHuman = window.prompt('Rock, paper or scissors?')
       resultRound = playRound(playHuman, computerPlay());
       if (resultRound.search('win') != -1) {
          ++counterPlayer;
          console.log('The humam have won the round');
       } else if (resultRound.search('lose') != -1){
          ++counterComputer;
          console.log('The machines have won the round');
       }else {
          console.log("It's a tie");  
       }
    }
    if (counterPlayer > counterComputer) {
       console.log('The humam have won the match');
    } else if (counterPlayer < counterComputer) {
       console.log('The machines have won the match');
    } else {
       console.log("It's a tie");
    }
 }

 game();
 