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
        question: 'kiek bus 2 + 2',
        choise1 = '2',
        choise2 = '3',
        choise3 = '4',
        choise4 = '5',
        answer: 2
    },
    {
        question: 'Geriausias Lietuvos krepšininkas',
        choise1 = 'Sabonis',
        choise2 = 'Valančiūnas',
        choise3 = 'Giedraitis',
        choise4 = 'Mačiulis',
        answer: 1
    },
    {
        question: 'Automobilis su 4 žiedais',
        choise1 = 'Golf',
        choise2 = 'BMW',
        choise3 = 'Audi',
        choise4 = 'Vw',
        answer: 3
    },
    {
        question: 'Front-end programavimo kalba',
        choise1 = 'SQL',
        choise2 = 'PHP',
        choise3 = 'NodeJs',
        choise4 = 'JavaScript',
        answer: 4
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

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
    progressText.innerText = `${questionCounter} klausimas iš ${MAx_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
}