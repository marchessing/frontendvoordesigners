carousel = (function(){

  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0; //houdt bij welke afbeelding er getoond wordt
  var amount = items.length; //kijken hoeveel items er zijn
  var current = items[0];

  //voeg de classa active toe aan container zodat deze gemanipuleerd kan worden
  box.classList.add('active'); 

  function navigate(direction) {

    current.classList.remove('current');
    counter = counter + direction;

    //hiermee zetten we de counter op 0
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }

    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }

    current = items[counter];
    current.classList.add('current');
  }

  //voegt 1 toe aan de counter
  next.addEventListener('click', function(ev) {
    navigate(1);
  });

  //haalt 1 van de counter af
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  
  //zorgt dat de eerste foto/item getoond wordt
  navigate(0); 
})();