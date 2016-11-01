import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('conspiracy-list', 'Integration | Component | conspiracy list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{conspiracy-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#conspiracy-list}}
      template block text
    {{/conspiracy-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
