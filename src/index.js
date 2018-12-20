import _ from 'lodash';
import { Card, SUITS } from './card';
import { Deck } from './deck';
import { Hand } from './hand';
import { Group } from './group';


window.SUITS = SUITS;

window.newDeck = new Deck();
newDeck.shuffleDeck();

window.firstCard = newDeck.giveCard();
window.secCard = newDeck.giveCard();

window.firstHand = new Hand();

window.firstGroup = new Group();
firstGroup.addCard(newDeck.giveCard());
firstGroup.addCard(newDeck.giveCard());
firstGroup.addCard(newDeck.giveCard());
firstGroup.addCard(newDeck.giveCard());

console.log(firstGroup);
firstGroup.isStraight('hey');
console.log(firstGroup);
