/*2. DOM manipulation
Using JavaScript, create a button and add it to the html (the document).
When the button is clicked:
-An h1 tag with the text “This is an h1 tag” is inserted below the button;
-The color of the button changes;
-The button becomes disabled. */

document.addEventListener("DOMContentLoaded", function() {

    const element = document.createElement("button");
    element.appendChild(document.createTextNode("I am a newborn button! Click me now!"));
    const space = document.getElementById("myButton");
    space.appendChild(element);
    console.log(element);

});
element.setAttribute("id", "btn")
element.addEventListener('click', interactive);
function interactive() {
    document.getElementById("myText").innerHTML = “This is an h1 tag”;
    document.getElementsById('btn').style.backgroundColor="green";
    document.getElementById("btn").disabled = true;
}
