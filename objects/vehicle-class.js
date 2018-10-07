'use strict';

//Implement both Car and Motorcycle using a Javascript Class (in the vehicle-class.js file)

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  
  drive() {
    return 'Moving Forward'; 
  }

  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 2;
  }
  wheelie() {
    return 'Wheee!';
  }
}

class FlyingVehicle {
  constructor(name, passengers) {
    this.name = name;
    this.passengers = passengers;
  }

  takeoff() {
    return 'Getting ready for takeoff';
  }
    
  fly() {
    return 'I am flying high in the sky!'; 
  }
  
  land() {
    return 'Stopping';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.passengers = 100;
  }

}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.passengers = 8;
  }
    
}

module.exports = {Car, Motorcycle, Airplane, Helicopter};
