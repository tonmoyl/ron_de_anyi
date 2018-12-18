import {Card, SUITS} from './card';

class Deck {
  constructor() {
    this._deck = this._createCards();
    this._count = 106;
  }

  get count() {
    return this._count;
  }

  _createCards() {

  }
}

export default Deck;
