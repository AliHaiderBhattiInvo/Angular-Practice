import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input('is-True') isTrue: boolean = false
  @Output('On-Change') change = new EventEmitter()
  onCLick() {
    this.isTrue = !this.isTrue
    this.change.emit({newValue: this.isTrue})
  }
  viewMode = "anythying"
  constructor() { }

  ngOnInit(): void {
  }

}
export interface EventArgs {
  newValue: boolean
}