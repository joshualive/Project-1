// User selections
let userSelections = 0

function choiceOne() {
    userSelections++
}

function choiceTwo() {
    userSelections += 2
}

// Image Change
let i = 1;
​
function imageClick() {
if (!this.alreadyClicked) {
    addNextImage();
    counter();
    this.alreadyClicked = true;
}
console.log("imageClick");
}
​
function addNextImage() {
    let img = `<img id="img-${i}"src=http://placehold.it/${
    200 + i
    }> <img id="img2-${i}"src=http://placehold.it/${200 + i}>`;
    ​
    document.body.innerHTML = img;
    ​
    document.getElementById(`img-${i}`).addEventListener("click", addNextImage);
    document.getElementById(`img2-${i}`).addEventListener("click", addNextImage);
    ​
    i = i + 1;
}

//Image Listeners
let firstImage = document.getElementById("firstImage");
firstImage.addEventListener("click", addNextImage);
​
let secondImage = document.getElementById("secondImage");
secondImage.addEventListener("click", addNextImage);

function clickedImageHandler() {
    addNextImage()
    choiceOne()
}