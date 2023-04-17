import { Component, Input, Output } from '@angular/core';
import { Card, DeckOfCards } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-deck-of-card-component',
  templateUrl: './deck-of-card-component.component.html',
  styleUrls: ['./deck-of-card-component.component.css']
})
export class DeckOfCardComponentComponent {
  backCover = '/assets/images/Back.png'

  cards:DeckOfCards

  @Output()
  onCardSelection = new Subject<Card | undefined>()

  constructor(){
    this.cards = new DeckOfCards
    this.cards.shuffle()
  }

  take(){
    const c = this.cards.take()
    console.info('>>> taken' , c)
    this.onCardSelection.next(c)
  }

}
