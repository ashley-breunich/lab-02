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

function Motorcycle() {
  let wheels = 2;
  let motorcycle = Object.assign({}, {name}, {wheels}, {wheelie}, Vehicle());
  
  function wheelie() { return 'Wheee!'; }
  return Object.freeze(motorcycle);
}

module.exports = {Car, Motorcycle};