
// declatatie van DOM elementen (nav)
var toonalles = document.querySelector('.btn-all');
var toongeel = document.querySelector('.btn-geel');
var toongroen = document.querySelector('.btn-groen');
var toonrood = document.querySelector('.btn-rood');
var toonroze = document.querySelector('.btn-roze');

var alles = document.querySelectorAll('section');
console.log("alles",alles);

var geel = document.querySelector('section.img-geel')
var groen = document.querySelector('section.img-groen')
var rood = document.querySelector('section.img-rood')
var roze = document.querySelector('section.img-roze')





// acties
toonalles.addEventListener("click",function(){
		geel.classList.remove('hide')
		groen.classList.remove('hide')
		rood.classList.remove('hide')
		roze.classList.remove('hide')
	}
);

toongeel.addEventListener("click",function(){

		//array alles?
		console.log(alles.length);
		for(var i=0;i<alles.length; i++){
			alles[i].classList.add('hide');	
		}
		
		//en nu de rode wél laten zien !
		geel.classList.remove('hide')

	}
);

toongroen.addEventListener("click",function(){

		//array alles?
		console.log(alles.length);
		for(var i=0;i<alles.length; i++){
			alles[i].classList.add('hide');	
		}
		
		//en nu de rode wél laten zien !
		groen.classList.remove('hide')

	}
);


toonrood.addEventListener("click",function(){

		//array alles?
		console.log(alles.length);
		for(var i=0;i<alles.length; i++){
			alles[i].classList.add('hide');	
		}
		
		//en nu de rode wél laten zien !
		rood.classList.remove('hide')

	}
);

toonroze.addEventListener("click",function(){

		//array alles?
		console.log(alles.length);
		for(var i=0;i<alles.length; i++){
			alles[i].classList.add('hide');	
		}
		
		//en nu de rode wél laten zien !
		roze.classList.remove('hide')

	}
);



