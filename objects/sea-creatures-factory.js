'use strict';

const SeaCreature = () => ({
  swim() {
    return 'I\'m swimming!!!';
  },
});

function Fish(name) {
  let claws = false;
  let phylum = 'Chordata';
  let fish = Object.assign({}, {name}, {claws}, {phylum}, SeaCreature());
  return Object.freeze(fish);
}

function Lobster(name) {
  let claws = true;
  let phylum = 'Crustacea';
  let lobster = Object.assign({}, {name}, {claws}, {phylum}, {invertebrate}, SeaCreature());
  
  function invertebrate() { return 'I have an exoskeleton!'; }
  return Object.freeze(lobster);
}

module.exports = {Fish, Lobster};