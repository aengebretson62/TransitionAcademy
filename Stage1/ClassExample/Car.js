class Car 
  {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    age() {
      // date = new Date();  // This will not work
      let date = new Date(); // This will work
      return date.getFullYear() - this.year;
    }
    info() {
        return "My " + this.make + " " + this.model + " is " + this.age() + " years old.";
    }
  }

  function myCarFunction() 
  {
    alert ("Get the user entered values and assigning variables to them...");
    var theMake = document.getElementById("fmake").value;
    var theModel = document.getElementById("fmodel").value;
    var theYear = document.getElementById("fyear").value;

    alert ("Creating the Car object and passing the values obtained...");
    var newCar = new Car(theMake, theModel, theYear);

    alert ("Providing the object information to the user");
    document.getElementById("information").innerHTML = newCar.info();
  }
