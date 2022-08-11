//Declaring variables
let scores,  roundScore, activePlayer, playing;

//Initializing the game
function initialize() {
    //set everything up
    playing = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    //Hide the dice
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#score--0').textContent = '0';
    document.querySelector('#score--1').textContent = '0';

    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';

    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}

//Change the active player
function changePlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //set the round score to  0
    roundScore = 0;
    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');

    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}

//initialize the game
initialize();


//Adding event to the roll button
document.querySelector('.btn--roll').addEventListener('click', function(){
    
    if(playing) {
        //Getting the round dice number
    let dice =  Math.floor(Math.random() * 6 + 1);
   

    //display the dice
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = './assets/dice-' +dice + '.png'

   
    //Update the round score if the rolled dice was not a 1
    if(dice !== 1) {
        //Add the socre to the active player
        roundScore += dice;
        document.querySelector('#current--' +activePlayer).textContent= roundScore;

    } else {
        // Next player's turn
        changePlayer();
    }
    
    }
});

document.querySelector('.btn--hold').addEventListener('click', function() {

    //if the game is playing: check the winner
    if(playing) {

        //Get the score 
        scores[activePlayer] += roundScore;
        document.querySelector('#score--' +activePlayer).textContent = scores[activePlayer];
    
        //checking the winner
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name--' +activePlayer).textContent = 'Winner!!!';

            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player--' +activePlayer).classList.add('player--winner');

            document.querySelector('.player--' +activePlayer).classList.remove('player--active');
            playing = false;
       
        } else {
        // Next player-s turn
            changePlayer();
        } 
    }
});

//new game button
document.querySelector('.btn--new').addEventListener('click', initialize);

