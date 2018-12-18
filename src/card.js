export class Card {
  constructor(value, suit=null) {
    this._value = value;
    this._suit = suit;
    this._joker = (value === 'joker' ? true : false);
  }

  get suit() {
    return this._suit;
  }

  get value() {
    return this._value;
  }

  get isJoker() {
    return this._joker;
  }
};

export const SUITS = [
  'Hearts',
  'Spades',
  'Clubs',
  'Diamonds'
];

export const VALUES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
  'Ace'
]
