import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input()
  listPush: number[] = [];
  @Output()
  listPushChange: EventEmitter<number[]> = new EventEmitter()

  @Input()
  index = 0;

  listColor = ["pink", "red", "orange", "yellow", "green", "blue"]

  @Input()
  listRandom: string[] = [];


  listC = ["white", "white", "white", "white"]

  counter = 0;

  flag: boolean = false
  flag1: boolean = false
  flag2: boolean = false
  flag3: boolean = true
  // checkPossible(select: string) {
  //   if (this.listC.includes(select)) {
  //     alert("dnfrwiokf")
  //   }
  // }
  check() {
    for (var i = 0; i < this.listC.length; i++) {
      if (this.listC[i] == this.listRandom[i])
        this.counter++
    }
    if (this.counter == 4) {
      setTimeout(() => {
        location.reload();
      }, 4000);
      this.flag2 = true
      this.flag = true
    }
    else if (this.index == 7) {
      this.flag1 = true;
      setTimeout(() => {
        location.reload();
      }, 3000);
    }

    else {
      this.flag = true
      this.listPush.push(++this.index)
      this.listPushChange.emit(this.listPush)
    }
    this.flag3 = false;

  }
}
