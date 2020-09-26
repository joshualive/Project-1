// User Selections Score
let userSelections = 0

// User Choices
let a = 1
let b = 1
let c = 0

function choiceOne() {
    userSelections++
    const imageA = document.getElementById('imageA')
    const imageB = document.getElementById('imageB')
    if (a < 5) {
        imageA.innerHTML = `<img src="a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
        imageB.innerHTML = `<img src="b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
    }
    c += 20
    document.getElementById('progressBar').value = `${c}`
    resultsPageDirect()
}

function choiceTwo() {
    userSelections += 2
    const imageA = document.getElementById('imageA')
    const imageB = document.getElementById('imageB')
    if (a < 5) {
        imageB.innerHTML = `<img src="b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
        imageA.innerHTML = `<img src="a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
    }
    c += 20
    document.getElementById('progressBar').value = `${c}`
    resultsPageDirect()
}

// After quiz completes, direct to 
function resultsPageDirect() {
    if (c === 100) {
        localStorage.setItem("userSelections",userSelections)
        location.replace("results.html")
        }
}

//Start Quiz
const startButton = document.getElementById('startButton')
const quizQuestions = document.getElementById('quizQuestions')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('is-hidden')
    quizQuestions.classList.remove('is-hidden')
    optionOne.textContent = firstOption[0]
    optionTwo.textContent = secondOption[0]
}

//Quiz Questions
const optionOne = document.getElementById('optionOne')
const optionTwo = document.getElementById('optionTwo')

const firstOption = [  
     'A hike in the mountains',
     'Visiting a museum',
     'Lounging on the beach',
     'Exploring on your own',
     'Checking out a non-touristy area',
]

const secondOption = [
     'Exploring a city',
     'Trying new foods',
     'Shopping for new clothes',
     'Getting the perfect Instagram photo',
     'A night at the hottest clubs',
]