import { Component } from '@angular/core';
import { Card, DeckOfCards, Player } from './models';

const NAMES = ['fred', 'barney', 'betty']

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Player[] = []

  currentPlayer = NAMES[0]
  deckOfCards = new DeckOfCards()


  constructor() {
    this.deckOfCards.shuffle()
    for (let n of NAMES) {
      this.players.push({
        name: n,
        hand: []
      })
    }
  }

  drawCardForPlayer(name: string) {
    this.currentPlayer = name
    const c = this.deckOfCards.take()
    console.info('>>> drawCardForPlayer: ${name}, card: ${JSON.stringify(c)}')
    const p = this.players.find(p => p.name == name)
    //@ts-ignore
    p?.hand.push(c)
  }

  newCard() {
    this.drawCardForPlayer(this.currentPlayer)
  }
}
