'use strict';

// Implement both Car and Motorcycle using a Javascript Factory Function (in the vehicle-factory.js file)

const Vehicle = () => ({
  drive() {
    return 'Moving Forward';
  },
  stop() {
    return 'Stopping';
  },
});

function Car(name) {
  let wheels = 4;
  console.log(wheels);
  let car = Object.assign({}, {name}, {wheels}, Vehicle());
  return Object.freeze(car);
}

function Motorcycle(name) {
  let wheels = 2;
  let motorcycle = Object.assign({}, {name}, {wheels}, {wheelie}, Vehicle());
  
  function wheelie() { return 'Wheee!'; }
  return Object.freeze(motorcycle);
}

const FlyingVehicle = () => ({
  takeoff() {
    return 'Getting ready for takeoff';
  },
  fly() {
    return 'I am flying high in the sky!'; 
  },
  land() {
    return 'Stopping';
  },
});

function Airplane(name) {
  let passengers = 100;
  let firstClass = true;
  let airplane = Object.assign({}, {name}, {passengers}, {firstClass}, FlyingVehicle());
  return Object.freeze(airplane);
}

function Helicopter(name) {
  let passengers = 8;
  let firstClass = false;
  let helicopter = Object.assign({}, {name}, {passengers}, {firstClass}, FlyingVehicle());
  return Object.freeze(helicopter);
}

module.exports = {Car, Motorcycle, Airplane, Helicopter};