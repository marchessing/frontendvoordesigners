
var header = document.querySelector('header');
var section = document.querySelector('.frame');

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
  // console.log("response",request.response);
  //Hier worden onderstaande functies gelezen
  showHeroes(superHeroes);
}

function showHeroes(jsonObj) {
  var heroes = jsonObj; // kan ik hier niet gewoon var superHeroes voor gebruiken?
  // console.log ("test", heroes);

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myCover = document.createElement('img');

    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');

    myCover.setAttribute('src', heroes[i].cover);
    myArticle.setAttribute('class', 'image-box');// voegt de claas image-box toe aan article

    myH2.textContent = heroes[i].title;
    myPara1.textContent = 'Simple plot: ' + heroes[i].simple_plot;
    // console.log("myCover", myCover);
    // console.log("myH2", myH2);
    // console.log("myPara1", myPara1);

    myArticle.appendChild(myCover);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    // console.log("myArticle",myArticle);

    section.appendChild(myArticle);
  }

  var frame = document.querySelector('.frame');
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');
  var images = document.querySelectorAll('.frame .image-box'); // Telt het aantal images in de slider
  var counter = 0;
  var indicator = document.querySelectorAll('li');
  console.log('li aantal', indicator);
  console.log("films", images);

  next.addEventListener('click', function() {
    counter = counter + 1;
    if (counter > images.length-1){
      counter = 0;
    }

    console.log('counter: ', counter);
    imageSelector();
  });

  prev.addEventListener('click', function() {
    counter = counter - 1;
    if(counter < 0){
      counter = 5;
    }

    console.log('counter: ', counter);
    imageSelector();
  });



  // Hier komt de functie
  function imageSelector() {
    clearclasses();
    if (counter == 0) {
      //console.log('de counter staat op 0');
      frame.classList.add('pos0');
    }
    else if (counter == 1) {
      //console.log('de counter staat op 1');
      frame.classList.add('pos1');
    }
    else if (counter == 2) {
      //console.log('de counter staat op 2');
      frame.classList.add('pos2');
    }
    else if (counter == 3) {
      //console.log('de counter staat op 3');
      frame.classList.add('pos3');
    }
    else if (counter == 4) {
      //console.log('de counter staat op 3');
      frame.classList.add('pos4');
    }
    else if (counter == 5) {
      //console.log('de counter staat op 3');
      frame.classList.add('pos5');
    }
    else {
      console.log('Er is hier geen afbeelding voor.')
    }
  };


  // Hier komt de function voor de ARROw besturing

  document.onkeydown = function(event) {
    clearclasses();
    //console.log(event.keyCode);

    if (event.keyCode == 39) {
      counter = counter + 1;
      if(counter > images.length-1){
        counter = 0;
      }
      console.log('counter:', counter);

      switch (counter) {
        case 0: frame.classList.add('pos0');
        break;
        case 1: frame.classList.add('pos1');
        break;
        case 2: frame.classList.add('pos2');
        break;
        case 3: frame.classList.add('pos3');
        break;
        case 4: frame.classList.add('pos4');
        break;
        case 5: frame.classList.add('pos5');
        break;
      }
    }
    else if (event.keyCode == 37) {
      counter = counter - 1;
      if(counter < 0){
        counter = 5;
      }
      console.log('counter:', counter);

      switch (counter) {
        case 0: frame.classList.add('pos0');
        break;
        case 1: frame.classList.add('pos1');
        break;
        case 2: frame.classList.add('pos2');
        break;
        case 3: frame.classList.add('pos3');
        break;
        case 4: frame.classList.add('pos4');
        break;
        case 5: frame.classList.add('pos5');
        break;

      }
    }
    currentImage();
  }

  // Current image function

  function currentImage() {


    if (counter == 0) {
      indicator[1].classList.remove('current');
      indicator[2].classList.remove('current');
      indicator[3].classList.remove('current');
      indicator[4].classList.remove('current');
      indicator[5].classList.remove('current');

      indicator[0].classList.add('current');
    }
    else if (counter == 1) {
      indicator[0].classList.remove('current');
      indicator[2].classList.remove('current');
      indicator[3].classList.remove('current');
      indicator[4].classList.remove('current');
      indicator[5].classList.remove('current');

      indicator[1].classList.add('current');
    }
    else if (counter == 2) {
      indicator[0].classList.remove('current');
      indicator[1].classList.remove('current');
      indicator[3].classList.remove('current');
      indicator[4].classList.remove('current');
      indicator[5].classList.remove('current');

      indicator[2].classList.add('current');
    }
    else if (counter == 3) {
      indicator[0].classList.remove('current');
      indicator[1].classList.remove('current');
      indicator[2].classList.remove('current');
      indicator[4].classList.remove('current');
      indicator[5].classList.remove('current');

      indicator[3].classList.add('current');
    }
    else if (counter == 4) {
      indicator[0].classList.remove('current');
      indicator[1].classList.remove('current');
      indicator[2].classList.remove('current');
      indicator[3].classList.remove('current');
      indicator[5].classList.remove('current');

      indicator[4].classList.add('current');
    }
    else if (counter == 5) {
      indicator[0].classList.remove('current');
      indicator[1].classList.remove('current');
      indicator[2].classList.remove('current');
      indicator[3].classList.remove('current');
      indicator[4].classList.remove('current');

      indicator[5].classList.add('current');
    }
  }



  function clearclasses(){
      frame.classList.remove('pos0');
      frame.classList.remove('pos1');
      frame.classList.remove('pos2');
      frame.classList.remove('pos3');
      frame.classList.remove('pos4');
      frame.classList.remove('pos5');
  }


}





