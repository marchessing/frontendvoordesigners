
// declatatie van DOM elementen (nav)
var toonalles = document.querySelector('.btn-all');
var toongeel = document.querySelector('.btn-geel');
var toongroen = document.querySelector('.btn-groen');
var toonrood = document.querySelector('.btn-rood');
var toonroze = document.querySelector('.btn-roze');

var alles = document.querySelectorAll('section');
console.log("alles",alles);

var geel = document.querySelectorAll('.geel')
console.log("geel",geel);

var groen = document.querySelectorAll('.groen')
console.log("groen",groen);

var rood = document.querySelectorAll('.rood')
console.log("rood",rood);

var roze = document.querySelectorAll('.roze')
console.log("roze",roze);





// acties
toonalles.addEventListener("click",function(){
		console.log(alles.length);
		for(var i=0;i<alles.length; i++){
			alles[i].classList.remove('hide');	
		}
	}
);

toongeel.addEventListener("click",function(){

		//array alles?
		console.log(alles.length);
		for(var i=0;i<alles.length; i++){
			alles[i].classList.add('hide');	
		}
		
		//en nu de rode wél laten zien !
		for(var i=0;i<geel.length; i++){
			geel[i].classList.remove('hide');	
		}
	}
);



