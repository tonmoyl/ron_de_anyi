export class Card {
  constructor(char, suit=null) {
    this._char = char;
    this._suit = suit;
    this._joker = (char === 'joker' ? true : false);
  }

  get suit() {
    return this._suit;
  }

  get char() {
    return this._char;
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

export const CHARS = [
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

export const VALUES = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'Jack': 11,
  'Queen': 12,
  'King': 13,
  'Ace': 1
}
