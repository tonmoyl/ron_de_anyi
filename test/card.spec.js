var assert = require('assert');
import {Card} from '../src/card';

describe('Card', () => {
  describe('Setup', () => {
    let card = new Card(1, 'h');
    it('should initialize with the correct properties', () => {
      assert.equal(card.value, 1);
      assert.equal(card.suit, 'h');
      assert.equal(card.isJoker, false);
    });

    it('should return if card is a joker', () => {
      let joker = new Card('joker');
      assert.equal(joker.value, 'joker');
      assert.equal(joker.suit, null);
      assert.equal(joker.isJoker, true);
    });
  });
});
