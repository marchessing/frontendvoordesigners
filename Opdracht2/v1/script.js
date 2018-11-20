// declaratie van DOM elementen NEXT en PREV

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var img = document.querySelectorAll('img')
console.log("img", img);




//acties 

next.addEventListener("click",function(){
	console.log(img.length);
	for (var i = 0; i < img.length; i++) {
		img[i].classList.add('move-right');
		}
	}
)

prev.addEventListener("click",function(){
	console.log(img.length);
	for (var i = 0; i < img.length; i++) {
		img[i].classList.remove('move-right');
		}
	}
)