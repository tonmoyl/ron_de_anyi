import { VALUES } from './card';

export class Group {
  constructor(cards = []) {
    this.cards = cards;
  }

  addCard(card) {
    var test = this.cards.slice();
    test.push(card);
    if (this.isStraight(test) || this.isHouse(test)) {
      this.cards.push(card);
      return true;
    }
    return false;
  }

  removeCard(card) {
    var test = [];
    var foundCard = false;
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i] === card){
        foundCard = true;
      } else {
        test.push(this.cards[i])
      }
    }

    if (!foundCard) return false;

    if (this.isStraight(test) || this.isHouse(test)) {
      this.cards = test;
      return true;
    }
    return false;
  }

  isStraight(cards) {
    var set = this.cards.slice()

    set.sort( (a,b) => { return VALUES[b.char] - VALUES[a.char] });

    for (var i = 0; i < set.length-1; i++) {
      var currentCard = set[i];
      var nextCard = set[i+1];

      if (VALUES[currentCard.char] !== VALUES[nextCard.char] + 1) {
        return false;
      }
    }
    return true;
  }

  isHouse(cards) {
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].char !== this.cards[i+1].char) {
        return false;
      }
    }
    return this.cards.length >= 3;
  }
}
