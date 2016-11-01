import Ember from 'ember';

export default Ember.Component.extend({
  currentConspiracy: Ember.computed(function(){
    var conspiracies= [
      {
        name: 'Bigfoot',
        image: 'https://4.bp.blogspot.com/-x3qm_4eKkmQ/VxQgjpRsnLI/AAAAAAAASEg/JsB89LGrKuIa5BZz3eOmVjn7Zn5H3f5SgCLcB/s1600/8e2a4dd90ec3c23ab262003d00093cb94a0b6628.jpg',
        description: 'Every time you see the word tall that is a sign that is bill is sponsored by BIG BIGFOOT and will benefit bigfoots instead of HARDWORKING CITIZENS like you, me, and my neighbor Joe. He\'s a good guy. And definitely not a secret bigfoot. He just has a body hair condition.'
      },
      {
        name: 'Aliens',
        image: 'https://oldstersview.files.wordpress.com/2008/05/marvin1.jpg',
        description: 'Everyone knows that the gobmant has been trying to steal our health care benefits and send them to space so that space aliens can get plastic surgery for years. Here are the most recent bills that bring them <strong>every closer</strong> to their goals.'
      },
      {
        name: 'Jackalopes',
        image: 'http://oddlylovely.com/wp-content/uploads/2015/01/Jackalope.jpg',
        description: 'It is a well known fact that jackalopes love eating money.  This is because money is green and lettuce is also green and rabbits eat lettuce and jackalopes are related to rabbits. That\'s why jackalope symmpathizers in the govumint have been working on funneling them money. They care more about jackalopes than HARDWORKING UNITED STATES CITIZENS.'
      },
      {
        name: 'Snake People',
        image: 'http://i1.kym-cdn.com/entries/icons/original/000/017/875/Snake_people.png',
        description: 'Look it\'s simple. The snake people, aka sneople, don\'t want you to know about snake people.  Hence every bill that includes education. You\'re welcome.'
      },
      {
        name: 'Hollow Earth',
        image: 'http://i.telegraph.co.uk/multimedia/archive/02971/hollow_2971889b.jpg',
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
