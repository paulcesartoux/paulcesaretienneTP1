import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public backgroundColor : string ='white';
  public colors : string[] = ["red","green","blue","yellow"];

  getColor(colorValue : string){
    console.log(colorValue)
    this.backgroundColor=colorValue
  }
}
