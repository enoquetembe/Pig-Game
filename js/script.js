let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

//Hide the dice
document.querySelector('.dice').style.display = 'none';

document.querySelector('#current--0').textContent = '0'
document.querySelector('#score--0').textContent = '0';

document.querySelector('#current--1').textContent = '0'
document.querySelector('#score--1').textContent = '0';

//Adding event to the roll button
document.querySelector('.btn--roll').addEventListener('click', function(){
    
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
        // Next player turns
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        //set the round score to  0
        roundScore = 0;
        document.querySelector('#current--0').textContent = '0';
        document.querySelector('#current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');

        document.querySelector('.player--1').classList.toggle('player--active');

        diceDom.style.display = 'none';
    }
    
});