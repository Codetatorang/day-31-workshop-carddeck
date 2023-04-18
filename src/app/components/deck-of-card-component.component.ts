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

  @Input()
  remainingCards = 0

  @Output()
  onCardSelection = new Subject<void>()

  constructor(){
    this.cards = new DeckOfCards()
    this.cards.shuffle()
  }

  take(){
    this.onCardSelection.next()
  }

}
