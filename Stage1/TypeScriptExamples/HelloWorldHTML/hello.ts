function myFunction() {
    let newName : string = "Alec";
    newName = (<HTMLInputElement>document.getElementById("fname")).value;
    document.getElementById("greeting")!.innerHTML = "Greetings " + newName + " !";
}
