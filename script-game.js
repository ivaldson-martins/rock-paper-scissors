function computerPlay() {
    let arrayDeJogadas = ['rock', 'paper', 'scissors'];
    let jogada = arrayDeJogadas[Math.floor(Math.random()*arrayDeJogadas.length)];
    return jogada;
 }
 function playRound(playerSelection, computerSelection) {
    let playerSelectionConverted = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
       return "It's a tie!";
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
       return 'You win! Rock beats scissors';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
       return 'You lose! Paper beats Rock';

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       return 'You lose! scissors beats paper';

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
       return 'You win! Paper beats Rock';

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
       return 'You win! scissors beats paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
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
       console.log(resultRound);
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
 