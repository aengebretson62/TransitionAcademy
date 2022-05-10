class Vehicle
  {
      constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
      }
   
      info() {
        return "My " + this.make + " " + this.model + " is " + this.age() + " years old.";
      }

     age() {
      // date = new Date();  // This will not work
      let date = new Date(); // This will work
      return date.getFullYear() - this.year;
    }
  }

class Car extends Vehicle
  {
    constructor(type,make,model, year) {
      super(make, model, year);
      this.type = type;
      }

  show() {
    return this.info() + ' It is a ' + this.type;
   }
  }

  function myCarFunction() 
  {
    alert ("Get the user entered values and assigning variables to them...");
    var theMake = document.getElementById("fmake").value;
    var theModel = document.getElementById("fmodel").value;
    var theYear = document.getElementById("fyear").value;
    var theType = document.getElementById("ftype").value;

    alert ("Creating the Car object and passing the values obtained...");
    var newCar = new Car(theType,theMake, theModel, theYear);

    alert ("Providing the object information to the user");
    document.getElementById("information").innerHTML = newCar.show();
  }
