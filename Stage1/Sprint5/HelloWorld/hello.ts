function myFunction() {
    let newName: string = "";
    newName += 5;
    newName = (<HTMLInputElement>document.getElementById("fname")).value;
    document.getElementById("greeting").innerHTML = "Greetings " + newName + " !";
}
