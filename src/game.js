import { Deck } from './deck';

export class Game {
  constructor(playerArray = []) {
    this.players = playerArray;
    this.totalPlayers = this.players.length;
    this.deck = new Deck();
    this.deck.shuffleDeck();
  }

  distributeCards(){
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

  start(){
    this.distributeCards();
  }

}
