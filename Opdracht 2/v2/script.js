//carousel = (function(){

  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0; //houdt bij welke afbeelding er getoond wordt
  var amount = items.length; //kijken hoeveel items er zijn dus 4
  var current = items[0];

  //voeg de classa active toe aan container zodat deze gemanipuleerd kan worden
  box.classList.add('active'); 

  function navigate(direction) {
    console.log("function navigate " + direction);

    current.classList.remove('current');
    counter = counter + direction;
    console.log("counter = " + counter)

    //hiermee zetten we de counter op 0
    if (direction === -1 && 
        counter < 0) { 
      console.log("direction = -1 dit is links");
      counter = amount - 1; 
    }

    if (direction === 1 && 
        !items[counter]) { 
      console.log("direction = 1 dit is rechts");
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

  document.onkeydown = function(event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
           case 37:
              console.log("links")
                navigate(-1);
              break;
           case 39:
                console.log("rechts");
                navigate(1); 
              break;
        }
  };


  
  //zorgt dat de eerste foto/item getoond wordt
  navigate(0);

//})();

if(current == 0){
  divcontainer.classList.add('pos0')
}else if(current == 1){
  divcontainer.classList.add('pos1')
}else if(current ==2 ){
  divcontainer.classList.add('pos2')
}



