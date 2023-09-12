import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Output() color = new EventEmitter();

  public addEventColor(squareColor : string){
    this.color.emit(squareColor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
