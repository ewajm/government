import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('conspiracy-details', 'Integration | Component | conspiracy details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{conspiracy-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#conspiracy-details}}
      template block text
    {{/conspiracy-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
