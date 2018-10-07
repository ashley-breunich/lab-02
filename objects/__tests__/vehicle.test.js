'use strict';

const Vehicle = require('../vehicle-factory.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');
    console.log(car);
    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});

describe('FlyingVehicle', () => {

  describe('Airplane', () => {

    let airplane = new Vehicle.Airplane('Alaska Airlines');
    console.log(airplane);

    it('It has 100 passengers', () => {
      expect(airplane.passengers).toEqual(100);
    });

    it('It can takeoff', () => {
      expect(airplane.takeoff()).toBeTruthy();
    });

    it('It can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('It can land', () => {
      expect(airplane.land()).toBeTruthy();
    });

    it('Offers a first class upgrade', () => {
      expect(airplane.firstClass).toEqual(true);
    });

  });

  describe('Helicopter', () => {

    let helicopter = new Vehicle.Helicopter('Apache');
    console.log(helicopter);

    it('It has 8 passengers', () => {
      expect(helicopter.passengers).toEqual(8);
    });

    it('It can takeoff', () => {
      expect(helicopter.takeoff()).toBeTruthy();
    });

    it('It can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('It can land', () => {
      expect(helicopter.land()).toBeTruthy();
    });

    it('Offers a first class upgrade', () => {
      expect(helicopter.firstClass).toEqual(false);
    });

  });

});
