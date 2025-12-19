let randomnumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loorhi = document.querySelector('.loorhi');

let prevguess = [];
let numguess = 1;
let playgame = true;
let resetBtn;


submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (!playgame) return;

    const guess = parseInt(userinput.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    
    if (isNaN(guess)) {
        displayMessage('Please enter a valid number.');
        return;
    }
    if (guess < 1 || guess > 100) {
        displayMessage('Number must be between 1 and 100.');
        return;
    }
    
    prevguess.push(guess);
    displayGuess();
    
    if (guess === randomnumber) {
        displayMessage(`You guessed it right!`);
        endGame(true);
    } else if (numguess === 10) {
        displayMessage(`Game over. The number was ${randomnumber}.`);
        endGame(false);
    } else if (guess < randomnumber) {
        displayMessage('Too low.');
    } else {
        displayMessage('Too high.');
    }
    numguess++;
    userinput.value = '';
}

function displayGuess() {
    guessslot.textContent = prevguess.join(', ');
    remaining.textContent = 10 - prevguess.length;
}

function displayMessage(msg) {
    loorhi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame(won) {
    playgame = false;
    userinput.setAttribute('disabled', 'disabled');
    submit.setAttribute('disabled', 'disabled');
    
    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Start New Game';
    resetBtn.setAttribute('id', 'resetBtn');
    document.querySelector('.wrapper').appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    prevguess = [];
    numguess = 1;
    playgame = true;
    guessslot.textContent = '';
    remaining.textContent = '10';
    loorhi.innerHTML = '';
    userinput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    userinput.value = '';
    resetBtn.remove();
}

