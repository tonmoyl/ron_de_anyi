import { VALUES } from './card';

export class Group {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    console.log(card)
    this.cards.push(card);
    return card;
  }

  isStraight(cards) {
    // console.log(VALUES[this.cards[0].char])
    return this.cards.sort( (a,b) => { return VALUES[b.char] - VALUES[a.char] });
    // for (var i = 0; i < cards.length; i++) {
    //   cards[i]
    // }
  }
}
