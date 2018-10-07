'use strict';


// const Vehicle = require('./constructor.js');
const Vehicle = require('./vehicle-class.js');
// const Vehicle = require('./vehicle-factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

const plane = new Vehicle.Airplane('Alaska Airlines');
console.log(plane.name, plane.passengers, plane.privatelyOwned, plane.firstClass(), plane.takeoff());

const chopper = new Vehicle.Helicopter('Apache');
console.log(chopper.name, chopper.passengers, chopper.privatelyOwned, chopper.takeoff());

