import { Component } from '@angular/core';
import { Card } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerHand: Card[] = []
  
  players = ["Fred", "Barney", "Betty"]
  
  newCard(card: Card | undefined){
    console.info('>>>c ', card)
    //@ts-ignore
    this.playerHand.push(card)
  }
}
