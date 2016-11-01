import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?query=' + params.search + '&apikey=' + key;
    return Ember.RSVP.hash({
      bills: Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      }),
      conspiracy: params.name
    });
  }
});
