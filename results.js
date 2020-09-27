// City Selector
function locationSelector() {
  let userSelections = localStorage.getItem("userSelections");
  let cityResult;
  if (userSelections <= 5) {
    cityResult = "Kauai, Hawaii";
    Kauai();
  } else if (userSelections == 6) {
    cityResult = "Maldives";
    Maldives();
  } else if (userSelections == 7) {
    cityResult = "Versailles, France";
    Versailles();
  } else if (userSelections == 8) {
    cityResult = "London, UK";
    London();
  } else if (userSelections == 9) {
    cityResult = "Tokyo, Japan";
    Tokyo();
  } else {
    cityResult = "New York City";
    newYorkCity();
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
      hit2.setAttribute("src", data.hits[3].largeImageURL);
    });
}

// Display City Information
function newYorkCity() {
  document.getElementById("mainColumn").innerHTML = `
  <p class="title">
      The Big Apple
  </p>
  <p>
    New York City, often called simply New York and abbreviated as NYC, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the U.S. state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass.With almost 20 million people in its metropolitan statistical area and approximately 23 million in its combined statistical area, it is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.
  </p>
  <p>
    Situated on one of the world's largest natural harbors, New York City is composed of five boroughs, each of which is a county of the State of New York. The five boroughs—Brooklyn, Queens, Manhattan, the Bronx, and Staten Island—were consolidated into a single city in 1898. The city and its metropolitan area constitute the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York, making it the most linguistically diverse city in the world. New York is home to more than 3.2 million residents born outside the United States, the largest foreign-born population of any city in the world as of 2016. As of 2019, the New York metropolitan area is estimated to produce a gross metropolitan product (GMP) of $2.0 trillion. If the New York metropolitan area were a sovereign state, it would have the eighth-largest economy in the world. New York is home to the highest number of billionaires of any city in the world.
  </p>
  <p>
    New York City traces its origins to a trading post founded by colonists from the Dutch Republic in 1624 on Lower Manhattan; the post was named New Amsterdam in 1626. The city and its surroundings came under English control in 1664 and were renamed New York after King Charles II of England granted the lands to his brother, the Duke of York. The city was the capital of the United States from 1785 until 1790, and has been the largest U.S. city since 1790. The Statue of Liberty greeted millions of immigrants as they came to the U.S. by ship in the late 19th and early 20th centuries, and is a symbol of the U.S. and its ideals of liberty and peace. In the 21st century, New York has emerged as a global node of creativity, entrepreneurship, and environmental sustainability, and as a symbol of freedom and cultural diversity. In 2019, New York was voted the greatest city in the world per a survey of over 30,000 people from 48 cities worldwide, citing its cultural diversity.
  </p>`;
}

function Tokyo() {
  document.getElementById("mainColumn").innerHTML = `
  <p class="title">
    The Eastern Capital 
  </p>
  <p>
    Tokyo is a major industry. In 2006, 4.81 million foreigners and 420 million Japanese visits to Tokyo were made; the economic value of these visits totaled 9.4 trillion yen according to the government of Tokyo. Many tourists visit the various downtowns, stores, and entertainment districts throughout the neighborhoods of the special wards of Tokyo; particularly school children on class trips, a visit to Tokyo Tower is de rigueur.

    Cultural offerings include both omnipresent Japanese pop culture and associated districts such as Shibuya and Harajuku, subcultural attractions such as Studio Ghibli anime center, as well as museums like the Tokyo National Museum, which houses 37% of the country's artwork national treasures (87/233). No buildings in Tokyo are World heritage sites and only the Jizo Hall of Shofuku-ji, a suburban temple, is a National treasure. Other popular attractions include the Imperial Palace, Meiji Shrine, and Sensō-ji, a popular temple. Finally, many tourists, particularly foreign tourists, visit Tsukiji Fish Market, as the time-zone difference leads to foreign visitors waking up very early local time. "The city's history can be appreciated in districts such as Asakusa and in many excellent museums, historic temples and gardens. Contrary to common perception, Tokyo also offers a number of attractive green spaces in the city center and within relatively short train rides at its outskirts."
  </p>
  <p>
    Access to Tokyo is provided by airports including Narita Airport, Tokyo International Airport (Haneda, providing primarily domestic service), and the Shinkansen. Major hotel districts include Shinjuku and Tokyo Bay, although there are some hotels in many more districts.
  </p>
  <p>
    "In 2018, more than 31 million international travellers visited Japan, up from around 6.8 million foreign visitors in 2009."
  </p>
  <p>
    Tokyo has many museums. In Ueno Park, there is the Tokyo National Museum, the country's largest museum and specializing in traditional Japanese art; the National Museum of Western Art and Ueno Zoo. Other museums include the National Museum of Emerging Science and Innovation in Odaiba; the Edo-Tokyo Museum in Sumida, across the Sumida River from the center of Tokyo; the Nezu Museum in Aoyama; and the National Diet Library, National Archives, and the National Museum of Modern Art, which are near the Imperial Palace.
  </p>
  <p>
    Tokyo has many theaters for performing arts. These include national and private theaters for traditional forms of Japanese drama. Noteworthy are the National Noh Theatre for noh and the Kabuki-za for Kabuki. Symphony orchestras and other musical organizations perform modern and traditional music. The New National Theater Tokyo in Shibuya is the national center for the performing arts, including opera, ballet, contemporary dance and drama. Tokyo also hosts modern Japanese and international pop, and rock music at venues ranging in size from intimate clubs to internationally known areas such as the Nippon Budokan.
  </p>
  <p>
    The Sanja Festival in Asakusa
    Many different festivals occur throughout Tokyo. Major events include the Sannō at Hie Shrine, the Sanja at Asakusa Shrine, and the biennial Kanda Festivals. The last features a parade with elaborately decorated floats and thousands of people. Annually on the last Saturday of July, an enormous fireworks display over the Sumida River attracts over a million viewers. Once cherry blossoms bloom in spring, many residents gather in Ueno Park, Inokashira Park, and the Shinjuku Gyoen National Garden for picnics under the blossoms.
  <p>
  <p>
    Harajuku, a neighborhood in Shibuya, is known internationally for its youth style, fashion and cosplay.
  </p>
    Cuisine in Tokyo is internationally acclaimed. In November 2007, Michelin released their first guide for fine dining in Tokyo, awarding 191 stars in total, or about twice as many as Tokyo's nearest competitor, Paris. As of 2017, 227 restaurants in Tokyo have been awarded (92 in Paris). Twelve establishments were awarded the maximum of three stars (Paris has 10), 54 received two stars, and 161 earned one star.
  </p>`;
}

function London() {
  document.getElementById("mainColumn").innerHTML = `
  <p class="title">
      The Swinging City
  </p>
  <p>
    London is one of the leading tourist destinations in the world and in 2015 was ranked as the most visited city in the world with over 65 million visits. It is also the top city in the world by visitor cross-border spending, estimated at US$20.23 billion in 2015. Tourism is one of London's prime industries, employing the equivalent of 350,000 full-time workers in 2003, and the city accounts for 54% of all inbound visitor spending in the UK. As of 2016 London was the world top city destination as ranked by TripAdvisor users.
  </p>
  <p>
    In 2015 the top most-visited attractions in the UK were all in London. The top 10 most visited attractions were: (with visits per venue)
  </p>
  <p>
    The British Museum: 6,820,686
    The National Gallery: 5,908,254
    The Natural History Museum (South Kensington): 5,284,023
    The Southbank Centre: 5,102,883
    Tate Modern: 4,712,581
    The Victoria and Albert Museum (South Kensington): 3,432,325
    The Science Museum: 3,356,212
    Somerset House: 3,235,104
    The Tower of London: 2,785,249
    The National Portrait Gallery: 2,145,486
    The number of hotel rooms in London in 2015 stood at 138,769, and is expected to grow over the years.
  </p>
  <p>
    Situated on one of the world's largest natural harbors, New York City is composed of five boroughs, each of which is a county of the State of New York. The five boroughs—Brooklyn, Queens, Manhattan, the Bronx, and Staten Island—were consolidated into a single city in 1898. The city and its metropolitan area constitute the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York,[18] making it the most linguistically diverse city in the world. New York is home to more than 3.2 million residents born outside the United States, the largest foreign-born population of any city in the world as of 2016. As of 2019, the New York metropolitan area is estimated to produce a gross metropolitan product (GMP) of $2.0 trillion. If the New York metropolitan area were a sovereign state, it would have the eighth-largest economy in the world. New York is home to the highest number of billionaires of any city in the world.
  </p>
  <p>
    London's finance industry is based in the City of London and Canary Wharf, the two major business districts in London. London is one of the pre-eminent financial centres of the world as the most important location for international finance. London took over as a major financial centre shortly after 1795 when the Dutch Republic collapsed before the Napoleonic armies. For many bankers established in Amsterdam (e.g. Hope, Baring), this was only time to move to London. The London financial elite was strengthened by a strong Jewish community from all over Europe capable of mastering the most sophisticated financial tools of the time. This unique concentration of talents accelerated the transition from the Commercial Revolution to the Industrial Revolution. By the end of the 19th century, Britain was the wealthiest of all nations, and London a leading financial centre. Still, as of 2016 London tops the world rankings on the Global Financial Centres Index (GFCI), and it ranked second in A.T. Kearney's 2018 Global Cities Index.
  </p>
  <p>
    The London Underground, commonly referred to as the Tube, is the oldest and third longest metro system in the world. The system serves 270 stations and was formed from several private companies, including the world's first underground electric line, the City and South London Railway. It dates from 1863.
  </p>
  <p>
    Over four million journeys are made every day on the Underground network, over 1 billion each year.An investment programme is attempting to reduce congestion and improve reliability, including £6.5 billion (€7.7 billion) spent before the 2012 Summer Olympics. The Docklands Light Railway (DLR), which opened in 1987, is a second, more local metro system using smaller and lighter tram-type vehicles that serve the Docklands, Greenwich and Lewisham.
  </p>`;
}

function Kauai() {
  document.getElementById("mainColumn").innerHTML = `
  <p class="title">
      The Garden Island
  </p>
  <p>
    Kauai is a lush paradise, with mountains, waterfalls, and a dramatic coastline. It is the oldest and westernmost of the large islands in the Hawaiian chain, and as a result has the most diverse range of plant life, a feature that has earned it the nickname of the "Garden Isle." The main attraction is the beautiful Waimea Canyon, which competes well with other scenic sites around the world. Unlike Oahu, which concentrates on cultural, urban, and entertainment-related attractions, Kauai offers a land of adventure and things to do. Some of these possibilities include boat trips to view the scenic Na Pali cliffs on the Northwest coast, kayaking down streams, helicopter flights, hiking, and the beaches.
  </p>
  <p>
    The island can be toured in two full days, with one day devoted to sites along the road west of Lihue, which curves up to Waimea Canyon, and a second day concentrating on the road that runs to the northern coast. However, most visitors will want to spend much more than two days on Kauai. Discover the best of the island with our list of the top attractions on Kauai.
  </p>
  <p>
    Na Pali Coast State Park encompasses a remote area of Kauai, with dramatic mountain scenery that includes cliffs, waterfalls, and lush vegetation. The Na Pali Coast in the northwest of the island is one of the most inaccessible parts of the Island of Kauai. The chain of mountains, climbing in places to 3,938 feet, forms steep cliffs plunging into the sea, whose beauty can only be fully appreciated from the water or from the air. Steep valleys on the landward side divide the mountain crests.
  </p>
  <p>
  Kauaʻi's climate is tropical, with generally humid and stable conditions year-round, although weather phenomena and infrequent storms have caused instances of extreme weather. At the lower elevations, the annual precipitation varies from an average of about 50 inches (130 cm) on the windward (northeastern) shore to less than 20 inches (51 cm) on the (southwestern) leeward side of the island. The average temperature in Lihu'e, the county seat, ranges from 78 °F (26 °C) in February to 85 °F (29 °C) in August and September. Kauaʻi's mountainous regions offer cooler temperatures and provide a pleasant contrast to the warm coastal areas. At the Kōkeʻe state park, 3,200–4,200 ft (980–1,280 m) ASL, day temperatures vary from an average of 45 °F (7 °C) in January to 68 °F (20 °C) in July. In the winter, temperatures have been known to drop down to the 30s and 40s at Kōkeʻe state park, which holds an unofficial record low of 29 °F (−2 °C) recorded in February 1986 at Kanaloahuluhulu Meadow.
  </p>`;
}

function Maldives() {
  document.getElementById("mainColumn").innerHTML = `
  <p class="title">
      Treasure Island
  </p>
  <p>
    The Maldives remained largely unknown to tourists until the early 1970s. Only 189 islands are home to its 447,137 inhabitants. The other islands are used entirely for economic purposes, of which tourism and agriculture are the most dominant. Tourism accounts for 28% of the GDP and more than 60% of the Maldives' foreign exchange receipts. Over 90% of government tax revenue comes from import duties and tourism-related taxes.
  <p>
    The development of tourism fostered the overall growth of the country's economy. It created direct and indirect employment and income generation opportunities in other related industries. The first tourist resorts were opened in 1972 with Bandos Island Resort and Kurumba Village (the current name is Kurumba Maldives), which transformed the Maldives economy.
  </p>
  <p>
    The resort island of Landaa Giraavaru (Baa atoll): According to the Ministry of Tourism, the emergence of tourism in 1972 transformed the economy, moving rapidly from dependence on fisheries to tourism. In just three and a half decades, the industry became the main source of income. Tourism was also the country's biggest foreign currency earner and the single largest contributor to the GDP. As of 2008, 89 resorts in the Maldives offered over 17,000 beds and hosted over 600,000 tourists annually. In 2019 over 1.7 million visitors came to the islands.
  </p>
  <p>
    The number of resorts increased from 2 to 92 between 1972 and 2007. As of 2007, over 8,380,000 tourists had visited Maldives.
  </p>
  <p>
    The country has six heritage Maldivian coral mosques listed as UNESCO tentative sites
  </p>
  <p>
    Visitors to the Maldives do not need to apply for a visa pre-arrival, regardless of their country of origin, provided they have a valid passport, proof of onward travel, and the money to be self-sufficient while in the country.
  </p>
  <p>
    Most visitors arrive at Velana International Airport, on Hulhulé Island, adjacent to the capital Malé. The airport is served by flights to and from India, Sri Lanka, Doha, Dubai, Singapore, Istanbul, and major airports in South-East Asia, as well as charters from Europe. Gan Airport, on the southern atoll of Addu, also serves an international flight to Milan several times a week. British Airways offers direct flights to the Maldives around 2–3 times per week.
  </p>`;
}

function Versailles() {
  document.getElementById("mainColumn").innerHTML = `
  <p class="title">
      The 17th century Palace
  </p>
  <p>
    Versailles is a city in the department of the Yvelines, Île-de-France, renowned worldwide for the Château de Versailles and the gardens of Versailles, designated UNESCO World Heritage Sites. Located in the western suburbs of the French capital, 17.1 km (10.6 mi) from the centre of Paris, Versailles is in the 21st century a wealthy suburb of Paris with a service-based economy and a major tourist destination as well. According to the 2017 census, the population of the city is 85,862 inhabitants, down from a peak of 94,145 in 1975.
  </p>
  <p>
    A new town founded at the will of King Louis XIV, Versailles was the de facto capital of the Kingdom of France for over a century, from 1682 to 1789, before becoming the cradle of the French Revolution. After having lost its status of royal city, it became the préfecture (regional capital) of the Seine-et-Oise département in 1790, then of Yvelines in 1968. It is also a Roman Catholic diocese.
  </p>
  <p>
    Versailles is historically known for numerous treaties such as the Treaty of Paris, which ended the American Revolution, and the Treaty of Versailles, after World War I. Today, the Congress of France – the name given to the body created when both houses of the French Parliament, the National Assembly and the Senate, meet – gathers in the Château de Versailles to vote on revisions to the Constitution.
  </p>
  <p>
    The Palace of Versailles is one of the most popular attractions in Europe, has been a UNESCO world heritage site for 30 years. It stands as a stunning example of 18th-century French art. Constructed in 1623, it was transformed and expanded by Louis XIV before becoming the center of political power during the French Revolution. Celebrated for the extravagance of its apartments, the palace is adorned with gold, crystal and precious gems. It is an incredibly well preserved site and offers numerous rooms and galleries for tourists to peruse. The palace is open every day and online reservations are recommended for large groups.
  </p>
  <p>
    A dazzling accompaniment to the Palace of Versaille, the Gardens of Versailles cover 800 hectares of land with sculptures, rare flowers and vivid greenery. Gaining status as a UNESCO World Heritage Site in 1979, the gardens consist of meticulously manicured lawns and grand fountains. These allow visitors to truly experience the brilliance of living in a French royal court. Plan your visit during summer, when water shows are performed every evening.
  </p>`;
}

const reStartButton = document.getElementById('reStartButton')
reStartButton.addEventListener('click', backToMain)

function backToMain(){
  location.replace("index.html")
  localStorage.clear()
}
