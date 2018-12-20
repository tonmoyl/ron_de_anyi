import _ from 'lodash';
import { Card, SUITS } from './card';
import { Deck } from './deck';
import { Hand } from './hand';

window.Card = Card;
window.SUITS = SUITS;
window.newDeck = new Deck();
newDeck.shuffleDeck();
window.firstCard = newDeck.giveCard();
window.firstHand = new Hand();
