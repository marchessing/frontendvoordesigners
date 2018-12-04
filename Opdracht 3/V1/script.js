var frame = document.querySelector('.frame');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var images = document.querySelectorAll('.frame .image-box'); // Telt het aantal images in de slider
var counter = 0;

var indicator = document.querySelectorAll('li');
console.log('li aantal', indicator);



// On-click actions +1 en -1 

next.addEventListener('click', function() {
	counter = counter + 1; //counter +=1
	if(counter > images.length-1){
		counter = 0;
	}

	console.log('counter: ', counter);
	imageSelector();
	currentImage();
});

prev.addEventListener('click', function() {
	counter = counter - 1;
	if(counter < 0){
		counter = 3;
	}

	console.log('counter: ', counter);
	imageSelector();
	currentImage();
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

		}
	}
	else if (event.keyCode == 37) {
		counter = counter - 1;
		if(counter < 0){
			counter = 3;
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

		}
	}
	currentImage();
}

// Current image function

function currentImage() {


	if (counter == 0) {
		indicator[0].classList.add('current');
	}
	else if (counter == 1) {
		indicator[1].classList.add('current');
	}
	else if (counter == 2) {
		indicator[2].classList.add('current');
	}
	else if (counter == 3) {
		indicator[3].classList.add('current');
	}
}



function clearclasses(){
		frame.classList.remove('pos0');
		frame.classList.remove('pos1');
		frame.classList.remove('pos2');
		frame.classList.remove('pos3');
		frame.classList.remove('pos4');

}






