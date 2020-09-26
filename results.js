// City Selector
function locationSelector() {
  let userSelections = localStorage.getItem("userSelections");
  let cityResult;
  if (userSelections <= 5) {
    cityResult = "Kauai, Hawaii";
    newYorkCity()
  } else if (userSelections == 6) {
    cityResult = "Maldives";
    newYorkCity()
  } else if (userSelections == 7) {
    cityResult = "Versailles, France";
    newYorkCity()
  } else if (userSelections == 8) {
    cityResult = "London, UK";
    newYorkCity()
  } else if (userSelections == 9) {
    cityResult = "Tokyo, Japan";
    newYorkCity()
  } else {
    cityResult = "New York City";
    newYorkCity()
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

// Display City Information
function newYorkCity(){
  document.getElementById('mainColumn').innerHTML = `
  <p class="title">
      The Big Apple
  </p>
  <p>
    New York City, often called simply New York and abbreviated as NYC, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the U.S. state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass.With almost 20 million people in its metropolitan statistical area and approximately 23 million in its combined statistical area, it is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.
  </p>
  <p>
    Situated on one of the world's largest natural harbors, New York City is composed of five boroughs, each of which is a county of the State of New York. The five boroughs—Brooklyn, Queens, Manhattan, the Bronx, and Staten Island—were consolidated into a single city in 1898. The city and its metropolitan area constitute the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York,[18] making it the most linguistically diverse city in the world. New York is home to more than 3.2 million residents born outside the United States, the largest foreign-born population of any city in the world as of 2016. As of 2019, the New York metropolitan area is estimated to produce a gross metropolitan product (GMP) of $2.0 trillion. If the New York metropolitan area were a sovereign state, it would have the eighth-largest economy in the world. New York is home to the highest number of billionaires of any city in the world.
  </p>
  <p>
    New York City traces its origins to a trading post founded by colonists from the Dutch Republic in 1624 on Lower Manhattan; the post was named New Amsterdam in 1626. The city and its surroundings came under English control in 1664 and were renamed New York after King Charles II of England granted the lands to his brother, the Duke of York. The city was the capital of the United States from 1785 until 1790, and has been the largest U.S. city since 1790. The Statue of Liberty greeted millions of immigrants as they came to the U.S. by ship in the late 19th and early 20th centuries, and is a symbol of the U.S. and its ideals of liberty and peace. In the 21st century, New York has emerged as a global node of creativity, entrepreneurship, and environmental sustainability, and as a symbol of freedom and cultural diversity. In 2019, New York was voted the greatest city in the world per a survey of over 30,000 people from 48 cities worldwide, citing its cultural diversity.
  </p>`
}
