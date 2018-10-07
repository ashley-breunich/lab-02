'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

const FlyingVehicle = function(name, passengers, firstClass) {
  this.name = name;
  this.passengers = passengers;
  this.firstClass = firstClass;
};

FlyingVehicle.prototype.takeoff = () => {
  return 'Getting ready for takeoff';
};

FlyingVehicle.prototype.fly = () => {
  return 'I am flying high in the sky!'; 
};

FlyingVehicle.prototype.land = () => {
  return 'Stopping'; 
};

// Airplane Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 100, true);
};

Airplane.prototype = new FlyingVehicle();

// Helicopter Constructor
const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 8, false);
};

Helicopter.prototype = new FlyingVehicle();

module.exports = {Car, Motorcycle, Airplane, Helicopter};
