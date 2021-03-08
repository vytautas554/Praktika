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

let answer = '';
let mistakes = 0;
let maxWrong = 6;
let guessed = [];
let wordStatus = null;

function randomWord () {
    answer = sports[Math.floor(Math.random() * sports.length)];
}

function generateButtons () {
    let buttonHTML = 'abcdeėfghiyjklmnoprsštuv'.split('').map(letter => 
        `
        <button 
            class="btn btn-lg btn-primary m-2" 
            id='` + letter + `'
            onclick="handleGuess('` + letter + `')"
        >
        ` + letter + `
        </button>
        `).join('');

    document.getElementById('keyboard').innerHTML = buttonHTML;
}

function guessedWord () {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "___")).join(' ');

    document.getElementById('wordGuess').innerHTML = wordStatus;
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();