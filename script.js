// User selections
let userSelections = 0

function choiceOne() {
    userSelections++
    locationSelector()
}

function choiceTwo() {
    userSelections += 2
    locationSelector()
}

// City Selector
function locationSelector(){
    if (userSelections === 5) {
        let cityResult = 'Kauai, Hawaii'
        // searchFunction(cityResult)
        alert(cityResult)
    }
    else if (userSelections === 6) {
        let cityResult = 'Maldives'
        // searchFunction(cityResult)
        alert(cityResult)
    }
    else if (userSelections === 7) {
        let cityResult = 'Versailles, France'
        // searchFunction(cityResult)
        alert(cityResult)
    }
    else if (userSelections === 8) {
        let cityResult = 'London, UK'
        // searchFunction(cityResult)
        alert(cityResult)
    }
    else if (userSelections === 9) {
        let cityResult = 'Tokyo, Japan'
        // searchFunction(cityResult)
        alert(cityResult)
    }
    else if (userSelections >= 10) {
        let cityResult = 'New York City'
        // searchFunction(cityResult)
        alert(cityResult)
    }
}