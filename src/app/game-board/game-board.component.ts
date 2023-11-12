import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit  {

 
  listColor = ["pink","red", "orange", "yellow", "green", "blue"]
  listRandom: string[] = [];
  flag:boolean=true;

  reset() {
    const newArray = [...this.listColor];

    for (var i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      const randomColor = newArray[randomIndex];
      this.listRandom.push(randomColor);
      newArray.splice(randomIndex, 1); // מוחק את הצבע שנבחר מהמערך
    }
    console.log(this.listRandom);
    this.flag=false;

  }
  reset1() {
    const newArray = [...this.listColor];

    for (var i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      const randomColor = newArray[randomIndex];
      this.listRandom.push(randomColor);
    }
    console.log(this.listRandom);
    this.flag=false
  }


  listNumber=[0]

  constructor() { }

ngOnInit(): void {
}
}

