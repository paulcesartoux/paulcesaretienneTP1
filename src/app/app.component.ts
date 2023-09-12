import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public color : string ='white';

  getColor(colorValue : string){
    this.color=colorValue
  }
}
