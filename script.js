// User Selections Score
let userSelections = 0

// User Choices
let a = 1
let b = 1
let c = 0
let d = 0

function choiceOne() {
    userSelections++
    const imageA = document.getElementById('imageA')
    const imageB = document.getElementById('imageB')
    if (a < 5) {
        imageA.innerHTML = `<img src="images/a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
        imageB.innerHTML = `<img src="images/b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
        ++d
        optionOne.textContent = firstOption[d]
        optionTwo.textContent = secondOption[d]
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
        imageB.innerHTML = `<img src="images/b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
        imageA.innerHTML = `<img src="images/a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
        ++d
        optionOne.textContent = firstOption[d]
        optionTwo.textContent = secondOption[d]
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
const quizSection = document.getElementById('quizSection')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start'})
    optionOne.textContent = firstOption[0]
    optionTwo.textContent = secondOption[0]
}

//Quiz Questions
const optionOne = document.getElementById('optionOne')
const optionTwo = document.getElementById('optionTwo')

const firstOption = [  
     'A hike in the mountains',
     'Trying new foods',
     'Lounging on the beach',
     'Exploring on your own',
     'Checking out a non-touristy area',
]

const secondOption = [
     'Exploring a city',
     'Visiting a museum',
     'Shopping for new clothes',
     'Getting the perfect selfie',
     'A night at the hottest clubs',
]