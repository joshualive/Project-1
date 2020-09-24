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

function SearchPhotos() {
    let query = document.getElementById("search").value;
    let url = `https://pixabay.com/api/?key=18404298-c06d772fc6ab5b9c57d22dda6&q=${query}`;
    //make a request to api
    fetch(url)
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);
        data.hits.forEach((photo) => {
          //let img = $("<img>");
          let result = `
          <img src="${photo.largeImageURL}">
          `;
          document.getElementById("card").innerHTML+=result;
        });
      });
  }