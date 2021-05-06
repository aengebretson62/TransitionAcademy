export {}

function greeter (person : string){
    return "Greetings! " + person;
}

let user: string ="Alec";
let userString : string = `My name is ${user}`;
console.log(greeter(userString));