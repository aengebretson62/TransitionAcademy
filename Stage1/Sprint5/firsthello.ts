export {}

function greeter (person : string){
    return "Greetings! " + person;
}

let user: string ="Aleccccccccccc";
let userString : string = `My name is ${user}`;
console.log(greeter(userString));