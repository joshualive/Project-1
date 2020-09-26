// City Selector
function locationSelector() {
  let userSelections = localStorage.getItem("userSelections");
  let cityResult;
  if (userSelections <= 5) {
    cityResult = "Kauai, Hawaii";
  } else if (userSelections === 6) {
    cityResult = "Maldives";
  } else if (userSelections === 7) {
    cityResult = "Versailles, France";
  } else if (userSelections === 8) {
    cityResult = "London, UK";
  } else if (userSelections === 9) {
    cityResult = "Tokyo, Japan";
  } else {
    cityResult = "New York City";
  }
  document.getElementById("cityName").textContent = cityResult;
  SearchPhotos(cityResult);
}
locationSelector();

//API Photo Search
function SearchPhotos(cityResult) {
  let url = `https://pixabay.com/api/?key=18404298-c06d772fc6ab5b9c57d22dda6&q=${cityResult}`;
  //make a request to api
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      let hit0 = document.getElementById("hit0");
      hit0.setAttribute("src", data.hits[0].largeImageURL);
      let hit1 = document.getElementById("hit1");
      hit1.setAttribute("src", data.hits[1].largeImageURL);
      let hit2 = document.getElementById("hit2");
      hit2.setAttribute("src", data.hits[2].largeImageURL);
    });
}

//need city info API
function SearchCityInfo(cityResult){

}
