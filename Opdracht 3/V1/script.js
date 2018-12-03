var frame = document.querySelector('.frame');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var images = document.querySelectorAll('.frame .image-box'); // Telt het aantal images in de slider
var counter = 0;


function imageSelector() {
	console.log('counter:', counter);


	// Switch statement die de classes toevoegd aan .images 
	// Hier moet nog een function voor geschreven worden.

	switch (counter) {
		console.log('hier sttat een switch');

		case 0:
			frame.classList.add('pos0');
			//console.log("counter", counter);
			break;
		case 1:
			frame.classList.add('pos1');
			//console.log("counter", counter);
			break;
		case 2:
			frame.classList.add('pos2');
			//console.log("counter", counter);
			break;
		case 3:
			frame.classList.add('pos3');
			//console.log("counter", counter);
			break;
		case 4:
			frame.classList.add('pos4');
			//console.log("counter", counter);
			break;
		default:
			//console.log("default is actief");


	};
};


// On-click actions +1 en -1 

next.addEventListener('click', function() {
	counter = counter + 1;
	//console.log('counter: ', counter);
});

prev.addEventListener('click', function() {
	counter = counter - 1;
	//console.log('counter: ', counter);
});



imageSelector();





