import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-bp',
  templateUrl: './check-bp.component.html',
  styleUrls: ['./check-bp.component.css']
})
export class CheckBPComponent implements OnInit {

  constructor() { }
  listC=["rgb(172, 185, 189)","rgb(172, 185, 189)","rgb(172, 185, 189)","rgb(172, 185, 189)"]
  pos = 0

  flagWin: boolean = false;
  
  @Input()
  chooseColor: string[] = [];
  @Input()
  listColor: string[] = [];

  countBool = 0;
  countPgia = 0;

  checkB() {
    for (var i = 0; i < this.chooseColor.length; i++) {
      if (this.chooseColor[i] == this.listColor[i]) {
        this.countBool++;
      }
    }
    console.log(this.countBool);

  }

  checkP() {
    for (var i = 0; i < this.chooseColor.length; i++) {
      for (var j = 0; j < this.chooseColor.length; j++) {
        if (this.chooseColor[i] == this.listColor[j] && i != j) {
          this.countPgia++;
        }
      }
    }
    console.log(this.countPgia);

  }

  bp() {
    for (var i = 0; i < this.countBool; i++) {
      this.listC[i] = "white"
      this.pos = i + 1
    }
    for (var i = this.pos; i < this.pos + this.countPgia; i++) {
      this.listC[i] = "black"
    }
    console.log(this.listC)

  }

  ngOnInit(): void {
    this.checkB();
    this.checkP();
    this.bp();

  }


}
