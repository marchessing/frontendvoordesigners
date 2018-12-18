
var header = document.querySelector('header');
var section = document.querySelector('section');

// variabele die verwijst naar de locatie van de JSON data
// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Hier wordt de JSON extern opgehaald
request.onload = function() {
  var superHeroes = request.response;
  console.log("response",request.response);

  //Hier worden onderstaande functies gelezen
  //populateHeader(superHeroes);
  showHeroes(superHeroes);
}

function showHeroes(jsonObj) {
  var heroes = jsonObj; // kan ik hier niet gewoon var superHeroes voor gebruiken?
  console.log ("test", heroes);

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myCover = document.createElement('img');
    var myPara1 = document.createElement('p');

    myH2.textContent = heroes[i].title;
    myCover.textContent = heroes[i].cover;
    myPara1.textContent = 'Simple plot: ' + heroes[i].simple_plot;
    console.log("myH2", myH2);
    console.log("myCover", myCover);
    console.log("myPara1", myPara1);

    myArticle.appendChild(myH2);
    myArticle.appendChild(myCover);
    myArticle.appendChild(myPara1);
    console.log("myArticle",myArticle);

    section.appendChild(myArticle);
  }

}
