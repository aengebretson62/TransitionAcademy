function myFunction() {
    var newname = (<HTMLInputElement>document.getElementById("fname")).value;
    document.getElementById("greeting").innerHTML = "Greetings " + newname + " !";
}
