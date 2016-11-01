import Ember from 'ember';

export default Ember.Component.extend({
  currentConspiracy: Ember.computed(function(){
    var conspiracies= [
      {
        name: 'Bigfoot',
        description: 'Every time you see the word tall that is a sign that is bill is sponsored by BIG BIGFOOT and will benefit bigfoots instead of HARDWORKING CITIZENS like you, me, and my neighbor Joe. He\'s a good guy. And definitely not a secret bigfoot. He just has a body hair condition.'
      },
      {
        name: 'Aliens',
        description: 'Everyone knows that the gobmant has been trying to steal our health care benefits and send them to space so that space aliens can get plastic surgery for years. Here are the most recent bills that bring them <strong>every closer</strong> to their goals.'
      },
      {
        name: 'Chupacabra',
        description: 'It is a well known fact that chupacabras love eating money way way way more than they love eating goats.  That\'s why chupacabra symmpathizers in the govumint have been working on funneling them money. They care more about goats than HARDWORKING UNITED STATES CITIZENS.'
      },
      {
        name: 'Snake People',
        description: 'Look it\'s simple. The snake people, aka sneople, don\'t want you to know about snake people.  Hence every bill that includes education. You\'re welcome.'
      },
      {
        name: 'Hollow Earth',
        description: 'What is the best way to keep you from finding out about the hollow earth? Regulation. The more regulations there are, the less you can pay attention to the <em>SCIENCE FACT</em> that the earth is hollow. Don\'t believe me? Why else would all these bills with regulations in them exist? Huh?'
      }
    ];
    for(var i = 0; i < conspiracies.length; i++){
      if(conspiracies[i].name.toLowerCase() === this.get('conspiracy')){
        return conspiracies[i];
      }
    }
  }),
});
