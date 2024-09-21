//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {

    const element = document.getElementById("level");

   
    let level = 0;

    let currentElement = element;
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

   
    alert(`The level of the element is: ${level}`);
});