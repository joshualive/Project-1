// User Selections Score
let userSelections = 0

let a = 1
let b = 1
let c = 0

// User Choices
function choiceOne() {
    userSelections++
    let imageA = document.getElementById('imageA')
    imageA.innerHTML = `<img src="a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
    imageB.innerHTML = `<img src="b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
    c += 20
    document.getElementById('progressBar').value = `${c}`
    resultsPageDirect()
}

function choiceTwo() {
    userSelections += 2
    let imageB = document.getElementById('imageB')
    
    imageB.innerHTML = `<img src="b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
    imageA.innerHTML = `<img src="a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
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
let startButton = document.getElementById('startButton')
let quizQuestions = document.getElementById('quizQuestions')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('is-hidden')
    quizQuestions.classList.remove('is-hidden')
}