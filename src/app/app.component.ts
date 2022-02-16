import { Component } from '@angular/core';
import { EventArgs } from './rating/rating.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Practice';
  isFavorite = true  
  onChangeEvent(args: EventArgs ) {
    console.log("on change event method called!", args.newValue )
  }
}
