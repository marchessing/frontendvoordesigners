var images = document.querySelector('.images');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var current = 3;

// Hier moet de counter komen





// Switch statement die de classes toevoegd aan .images 
switch (current) {
	case 0:
		images.classList.add('pos0');
		console.log("current", current);
		break;
	case 1:
		images.classList.add('pos1');
		console.log("current", current);
		break;
	case 2:
		images.classList.add('pos2');
		console.log("current", current);
		break;
	case 3:
		images.classList.add('pos3');
		console.log("current", current);
		break;
	case 4:
		images.classList.add('pos4');
		console.log("current", current);
		break;
	default:
		console.log("default is actief");


} 