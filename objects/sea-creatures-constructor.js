'use strict';

const SeaCreature = function(name, claws, phylum) {
  this.name = name;
  this.claws = claws;
  this.phylum = phylum;
};

SeaCreature.prototype.swim= () => {
  return 'I\'m swimming!!!'; 
};

// Create Fish Constructor
const Fish = function(name) {
  SeaCreature.call(this, name, false, 'Chordata');
};

Fish.prototype = new SeaCreature();

// Create Lobster Constructor
const Lobster = function (name) {
  SeaCreature.call(this, name, true, 'Crustacea');
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.invertebrate = () => {
  return 'I have an exoskeleton!';
};

module.exports = {Fish, Lobster};