let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

//

document.querySelector('.btn--roll').addEventListener('click', function(){

    let dice =  Math.floor(Math.random() * 6 + 1);
    roundScore += dice;

    let diceDom = document.querySelector('.dice');
    
    diceDom.style.display = 'block';
    diceDom.src = './assets/dice-' +dice + '.png'


    document.querySelector('#current--' +activePlayer).textContent= roundScore;
    
});