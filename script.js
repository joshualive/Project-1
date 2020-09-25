// User selections
let userSelections = 0

let a = 1
let b = 1

function choiceOne() {
    userSelections++
    let imageA = document.getElementById('imageA')
    imageA.innerHTML = `<img src="a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
    imageB.innerHTML = `<img src="b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
}

function choiceTwo() {
    userSelections += 2
    let imageB = document.getElementById('imageB')
    imageB.innerHTML = `<img src="b${++b}.png" class="choices" onclick="choiceTwo()" id="choiceTwo" />`
    imageA.innerHTML = `<img src="a${++a}.png" class="choices" onclick="choiceOne()" id="choiceOne" />`
}

