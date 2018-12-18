import _ from 'lodash';
import { Card, SUITS } from './card';
import { Deck } from './deck';

window.Card = Card;
window.SUITS = SUITS;
var newDeck = new Deck();
newDeck.shuffleDeck();
console.log(newDeck);
