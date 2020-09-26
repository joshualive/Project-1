// User selections
let userSelections = 0

let a = 1
let b = 1
let c = 0

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

function resultsPageDirect() {
    if (c === 100) {
        localStorage.setItem("userSelections",userSelections)
        location.replace("results.html")
        }
}
