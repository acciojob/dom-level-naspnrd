// Function to determine the DOM level of an element
function getDOMLevel(element) {
	let level = 0;
	while(element){
		level++;
		element = element.parentElement;
	}
	return level; 
}


// Get the element with id 'level'
const targetElement = document.getElementById('level');


// // Calculate the DOM level of the target element
const domLevel = getDOMLevel(targetElement);


// // Display the DOM level using an alert
alert(`The level of the element is: ${domLevel}`);
