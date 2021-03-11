let sports = [
    'futbolas',
    'kriketas',
    'krepšinis',
    'tenisas',
    'tinklinis',
    'beisbolas',
    'golfas',
    'boksas',
    'imtynės',
    'plaukimas',
]

// let alphabet = 'abcdeėfghijklmnoprsštuvy';


let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord () {
    answer = sports[Math.floor(Math.random() * sports.length)];
}

function createButtons () {
   let buttonHTML = 'abcdeėfghijklmnoprsštuvy'.split('').map(letter => 
    `
    <button
    id='` + letter +`'
    class='btn btn-primary m-2'
    onClick="handleGuess('` + letter +`')">
        `+ letter +`
    </button>
    `).join(' ');

    document.getElementById('buttons').innerHTML = buttonHTML;
}

function handleGuess (choosenLetter) {
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    document.getElementById(choosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(choosenLetter) >= 0 ) {
        guessedWord();
        gameWon();
    } else if (answer.indexOf(choosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        gameLost();
        updateHangmanPic();
    } 
}

function updateHangmanPic() {
    document.getElementById('hangmanPic').src = './img/' + mistakes + '.jpg';
}

function gameWon () {
    if (wordStatus === answer) {
        document.getElementById('buttons').innerHTML = "Sveikiname, Laimėjote!!!";
    }
}

function gameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordLenght').innerHTML = 'Teisingas atsakymas: ' + answer;
        document.getElementById('buttons').innerHTML = "Deja pralaimėjote :(";
    }
}

function guessedWord () {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' ___ ')).join('');
    document.getElementById('wordLenght').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset () {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './img/0.jpg';

    randomWord();
    guessedWord();
    updateMistakes();
    createButtons();
}


document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
createButtons();
guessedWord();