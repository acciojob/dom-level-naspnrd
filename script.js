
const targetLevel = document.getElementById("level");

function getDomLevel(element){
	let level = 0;
	// loop as long as element is not null
	while(element) {
		level++;
		element = element.parentElement;
	}
	return level;
}
const domLevel = getDomLevel(targetLevel); 

alert(`The level of the element is: ${domLevel}`);