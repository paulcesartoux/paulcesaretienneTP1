import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public backgroundColor : string ='white';
  colors:string[] = ["red","green","blue","yellow"];

  getColor(colorValue : any){
    console.log(colorValue)
    this.backgroundColor=colorValue
  }
}
