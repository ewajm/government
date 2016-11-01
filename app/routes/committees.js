import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=' + key;
    var url2 = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=' + key;
    return Ember.RSVP.hash({
      house:Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(url2).then(function(responseJSON) {
        return responseJSON.results;
      }),
    });
  }
});
