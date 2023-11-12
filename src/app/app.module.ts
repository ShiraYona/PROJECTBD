import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GameBoardComponent } from './game-board/game-board.component';
import { CheckBPComponent } from './check-bp/check-bp.component';
import { DrawingComponent } from './drawing/drawing.component';
import { WinComponent } from './win/win.component';


@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CheckBPComponent,
    DrawingComponent,
    WinComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
