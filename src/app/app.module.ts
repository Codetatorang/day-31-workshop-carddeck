import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeckOfCardComponentComponent } from './components/deck-of-card-component.component';
import { PlayerComponentComponent } from './components/player-component/player-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckOfCardComponentComponent,
    PlayerComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
