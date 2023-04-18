import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Card, DeckOfCards, Player } from 'src/app/models';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent {

  @Input()
  player!: Player

  @Output()
  onDrawCard = new Subject<string>()

  drawACard() {
    console.info('name: ${this.player.name}')
    this.onDrawCard.next(this.player.name)
  }
}
