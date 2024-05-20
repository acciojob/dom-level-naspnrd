// Function to determine the DOM level of an element
function getDOMLevel(element) {
   // Initialize a counter to keep track of the DOM level
   let level = 0;


   // Loop as long as the element is not null
   while (element) {
       // Increment the level counter for each parent element
       level++;
       // Move up to the parent element
       element = element.parentElement;
   }


   // Return the final level count
   return level;
}


// Get the element with id 'level'
const targetElement = document.getElementById('level');


// Calculate the DOM level of the target element
const domLevel = getDOMLevel(targetElement);


// Display the DOM level using an alert
alert(`The level of the element is: ${domLevel}`);
