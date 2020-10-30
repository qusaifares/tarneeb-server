import { CardSuit, CardValue } from 'types/card';
import { GamePlayers }  from 'types/game'
import Card from './card'
import Player from './player';

export default class Game {
  constructor() {}
  readonly suits: CardSuit[] = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
  readonly values: CardValue[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  public deck: Card[] = [];
  public players: GamePlayers = {}

  public generateDeck() {
    let tempDeck: Card[] = [];
    this.suits.forEach(suit => {
      this.values.forEach(value => tempDeck.push(new Card(suit, value)));
    })
    this.deck = tempDeck;
  }

  public shuffleDeck() {
    const { length } = this.deck;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomCard = this.deck[randomIndex];
      this.deck[randomIndex] = this.deck[i];
      this.deck[i] = randomCard;
    }
  }

  public dealCard(card: Card, player: Player) {}
}