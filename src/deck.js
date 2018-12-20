import { Card, SUITS, CHARS } from './card';
import { shuffle } from 'lodash';

export class Deck {
  constructor() {
    this._deck = this._createCards();
    this._count = this._deck.length;
  }

  get count() { // will not invoke
    return this._count;
  }

  _createCards() {
    var allCards = [];
    for (var i = 0; i < 2; i++) {
      SUITS.forEach( (suit) => {
        CHARS.forEach( (val) => {
          allCards.push(new Card(val, suit));
        })
      })
    }
    return allCards;
  }

  giveCard() {
    return this._deck.pop();
  }

  shuffleDeck() {
    this._deck = shuffle(this._deck)
  }
}
