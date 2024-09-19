// li.parentElement() = ul.parentElmt = body


const targetLevel = document.getElementById("level");


function getDepth(e){
	let level =0;
	while(e){
		level++;
		e = e.parentElement;
	}

	return level;
}


const depth = getDepth(targetLevel);
alert("The level of the element is: ${depth}");
