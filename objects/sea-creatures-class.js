'use strict';

class SeaCreature {
  constructor(name, claws, phylum) {
    this.name = name;
    this.claws = claws;
    this.phylum = phylum;
  }
  swim() {
    return 'I\'m swimming!!!'; 
  }
}

class Fish extends SeaCreature {
  constructor(name) {
    super();
    this.name = name;
    this.claws = false;
    this.phylum = 'Chordata';
  }
}

class Lobster extends SeaCreature {
  constructor(name) {
    super();
    this.name = name;
    this.claws = true;
    this.phylum = 'Crustacea';
  }
  invertebrate() {
    return 'I have an exoskeleton!';
  }
}

module.exports = {Fish, Lobster};
