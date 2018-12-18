var assert = require('assert');
import Card from '../src/card';

describe('Card', () => {
  describe('Initialization', () => {
    it('should have the correct this._suit and this._value properties', () => {
      let card = new Card('h', 1);
      assert.equal(card._suit, 'h');
      assert.equal(card._value, 1);
    });
  });
  
  describe('Getter methods', () => {
    it('should return the correct suit and value properties', () => {
      let card = new Card('h', 1);
      assert.equal(card.suit, 'h');
      assert.equal(card.value, 1);
    });
  });
});
