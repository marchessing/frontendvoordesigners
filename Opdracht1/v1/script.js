
// declatatie van DOM elementen (nav)
var toonalles = document.querySelector('.btn-all');
var alles = document.querySelector('.img-all')



// actie
toonalles.addEventListener("click",function(){
		alles.classList.toggle('img-all')
	}
);



//declaratie van dom elementen
var vergrootglas = document.querySelector('header img:last-of-type');
var zoekveld = document.querySelector('header');

//actie !
vergrootglas.addEventListener("click",function(){
    zoekveld.classList.toggle('search');  
  }
);