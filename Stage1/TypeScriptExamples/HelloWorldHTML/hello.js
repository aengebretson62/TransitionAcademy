"use strict";
function myFunction() {
    var newName = "Alec";
    newName = document.getElementById("fname").value;
    document.getElementById("greeting").innerHTML = "Greetings " + newName + " !";
}
