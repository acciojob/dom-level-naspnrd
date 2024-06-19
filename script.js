
const targetLevel = document.getElementById("level");

function getDomLevel(element){
	let level = 0;
	// parentElement;

	// element = element.parentElement;
	// element = element.parentElement;
	while(element){
		level++;
		element = element.parentElement;
	}
	return level;
}
const domLevel = getDomLevel(targetLevel);

alert(`The level of the element is: ${domLevel}`);