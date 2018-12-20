export class Hand {
  constructor() {
    this.cards = [];
  }

  receiveCards(severalCards) {
    if (severalCards instanceof Array) {
      this.cards.concat(severalCards)
    } else {
      this.cards.push(severalCards);
    }
    return severalCards;
  }

  win() {
    return this.cards.length === 0
  }

  play(card) {
    for (var i = 0; i < this.cards.length; i++) {
      if (card === this.cards[i]) {
        this.cards.splice(i,1);
      }
    }
    return card
  }
}
