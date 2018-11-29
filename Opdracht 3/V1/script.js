var frame = document.querySelector('.frame');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var images = document.querySelectorAll('.frame .image-box'); // Telt het aantal images in de slider
var counter = 0;
var items = images.length; // Maakt een nummer van het aantal images
var current = items[0]; //[0] zorgt ervoor dat het eerst item uit de serie wordt gepakt.

console.log("Images", images);
console.log("Aantal images in slider: ", items);
console.log("Current: ", current);



// Hier moet de counter komen

function currentImage () {
	//hier moet de current het image nummer uitgerekend worden.

}



// Switch statement die de classes toevoegd aan .images 
// Hier moet nog een function voor geschreven worden.

switch (counter) {
	case 0:
		frame.classList.add('pos0');
		console.log("counter", counter);
		break;
	case 1:
		frame.classList.add('pos1');
		console.log("counter", counter);
		break;
	case 2:
		frame.classList.add('pos2');
		console.log("counter", counter);
		break;
	case 3:
		frame.classList.add('pos3');
		console.log("counter", counter);
		break;
	case 4:
		frame.classList.add('pos4');
		console.log("counter", counter);
		break;
	default:
		console.log("default is actief");


} 