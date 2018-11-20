// declaratie van DOM elementen NEXT en PREV

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var img2 = document.querySelector('.img2')
console.log("img2", img2);




//acties 

next.addEventListener("click",function(){
	img2.classList.add('move-right');
	}
)

prev.addEventListener("click",function(){
	img2.classList.remove('move-right');

	img2.classList.add('move-left');
	}
)