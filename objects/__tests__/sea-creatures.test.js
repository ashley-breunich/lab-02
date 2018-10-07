'use strict';

const SeaCreature = require('../sea-creatures-class.js');

describe('Sea Creature', () => {

  describe('Fish', () => {
  
    let fish = new SeaCreature.Fish('Dory');
    console.log(fish);

    it('They do not have claws', () => {
      expect(fish.claws).toEqual(false);
    });
  
    it('Their phylum is Chordata', () => {
      expect(fish.phylum).toEqual('Chordata');
    });
  
    it('They can swim', () => {
      expect(fish.swim()).toBeTruthy();
    });
  
    it('They are not invertebrates', () => {
      expect(fish.invertebrate).toBeUndefined();
    });
  });

  describe('Lobster', () => {
  
    let lobster = new SeaCreature.Lobster('Red Lobster');
    console.log(lobster);

    it('They do have claws', () => {
      expect(lobster.claws).toEqual(true);
    });
  
    it('Their phylum is Crustacea', () => {
      expect(lobster.phylum).toEqual('Crustacea');
    });
  
    it('They can swim', () => {
      expect(lobster.swim()).toBeTruthy();
    });
  
    it('They are invertebrates', () => {
      expect(lobster.invertebrate()).toEqual('I have an exoskeleton!');
    });
  });

});