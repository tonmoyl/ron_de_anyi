import { Deck } from './deck';

export class Game {
  constructor(playerArray = []) {
    this.players = playerArray;
    this.totalPlayers = this.players.length;
    this.deck = new Deck();
    this.deck.shuffleDeck();
    this.over = false;
    this.currentPlayer = this.players[0];
  }

  distributeCards() {
    for (var i = 0; i < this.players.length; i++) {
      var currPlayer = this.players[i];
      for (var j=0; j < 14; j++) {
        currPlayer.receiveCards(this.deck.giveCard());
      }
    }
  }

  addPlayer(player) {
    this.players.push(player);
    this.totalPlayers += 1;
  }

  playTurn(card) {
    this.currentPlayer.playCard(card);
  }

  start() {
    this.distributeCards();
  }

  endTurn() {
    this.players.push(this.players.shift());
    this.currentPlayer = this.players[0];
  }
}
