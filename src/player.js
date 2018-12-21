import { Hand } from './hand'l

export class Player {
  constructor(name) {
    this.name = name;
    this.hand = new Hand();
  }

  receiveCards(card) {
    this.hand.receiveCards(cards);
  }

  playCard(card) {
    this.hand.play(card);
  }
}
