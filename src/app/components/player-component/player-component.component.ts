import { Component, Input, Output } from '@angular/core';
import { Card, DeckOfCards } from 'src/app/models';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent {

  @Input()
  name = 'fred'

  @Input()
  hand:Card[] = []  
}
