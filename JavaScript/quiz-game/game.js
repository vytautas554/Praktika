const question = document.querySelector('#question')
const choises = Array.from(document.querySelectorAll('.choise-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Aukščiausia pasaulio viršukalnė?',
        choise1: 'Everestas',
        choise2: 'Lhotse',
        choise3: 'Manaslu',
        choise4: 'Annapurna',
        answer: 1
    },
    {
        question: 'Kiek pasaulyje yra kalnų, aukštesnių nei 7200m?',
        choise1: '37',
        choise2: 'Virš 200',
        choise3: 'Virš 100',
        choise4: 'Mažiau nei 100',
        answer: 3
    },
    {
        question: 'Apie 1200 žmonių kiekvienais metais bando užkopti į Everestą, kiek iš jų pavyksta?',
        choise1: 'Mažiau nei trečdalis',
        choise2: 'Maždaug pusė',
        choise3: 'Apie ketvirtadalį',
        choise4: 'Vienas žmogus iš 100',
        answer: 2
    },
    {
        question: 'Prieš kiek metų pradėjo formuotis Himalajų kalnynas?',
        choise1: 'Daugiau nei 47mln',
        choise2: 'Daugiau nei 20mln',
        choise3: 'Daugiau nei 30mln',
        choise4: 'Daugiau nei 55mln',
        answer: 4
    },
    {
        question: 'Kiek vidutiniškai per metus žmonių miršta bandant įkopti į Everestą?',
        choise1: '2',
        choise2: '3',
        choise3: '5',
        choise4: '6',
        answer: 4
    },
    {
        question: 'Aukčiausias klanas saulės sistemoje yra Olympus Mons Marse, koks jo aukštis?',
        choise1: '24944m.',
        choise2: '15875m.',
        choise3: '13587m.',
        choise4: '44258m.',
        answer: 1
    },
    {
        question: 'Kiek vienu šuoliu kalnų ožka gali nušokti?',
        choise1: 'Apie 1m.',
        choise2: '2-3m.',
        choise3: 'Beveik 4m.',
        choise4: 'Ne daugiau nei 2m.',
        answer: 3
    },
    {
        question: 'Kiek procentų gėlo pasaulio vandens atsiradę iš kalnų??',
        choise1: '70',
        choise2: '80',
        choise3: '90',
        choise4: 'Mažiau nei 50',
        answer: 2
    },
    {
        question: 'Aukščiausios 14 pasaulio viršukalnių yra?',
        choise1: 'Čilėje',
        choise2: 'Rusijoje',
        choise3: 'Himalajuose',
        choise4: 'Argentinoje',
        answer: 3
    },
    {
        question: 'Kiek Everestas padidėja kiekvienais metais?',
        choise1: 'apie 4mm',
        choise2: 'apie 30cm',
        choise3: 'Beveik 1m',
        choise4: 'Nepadidėja',
        answer: 1
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }
    questionCounter++
    progressText.innerText = `${questionCounter} klausimas iš ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choises.forEach(choise => {
        const number = choise.dataset['number']
        choise.innerText = currentQuestion['choise' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choises.forEach(choise => {
    choise.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoise = e.target
        const selectedAnswer = selectedChoise.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoise.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoise.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)

    })
})

incrementScore = num => {
    score += num 
    scoreText.innerText = score
}

startGame()