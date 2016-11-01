import Ember from 'ember';

export default Ember.Component.extend({
  sponsorTruth: Ember.computed(function(){
    var arrayOfSilly = [
      "centaur",
      "lizard",
      "space alien",
      "mole",
      "dragon",
      "cake",
      "robot",
      "cyborg",
      "wizard"
    ];
    var arrayOfSilly2 = [
      "person",
      "sympathizer",
      "blogger",
      "channeler",
      "cultist",
      "flunky",
      "sith"
    ];
    return arrayOfSilly[Math.floor(Math.random()*arrayOfSilly.length)] + " " + arrayOfSilly2[Math.floor(Math.random()*arrayOfSilly2.length)];
  })
});
