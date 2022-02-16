import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'Course',
  template: `
  <div *ngIf="courses.length > 0">List of Courses</div>
  <div *ngIf="courses.length == 0">No Courses</div>
  <div [hidden]="courses.length == 0">Courses List</div>
  <div [hidden]="courses.length > 0">No Courses</div>
  <h2>{{ getTitle() }}</h2>
    <h2 [textContent]="getTitle()"></h2> 
    <div style="margin:10px">
    <button class="btn btn-primary">Simple</button>
    <button class="btn btn-primary" [class.active]="isActive">Active</button>
    <button class="btn btn-primary" (click)="clickMe()">Click Me!</button>
    <button class="btn btn-primary" (focus)="focusMe()">Focus Me!</button>
    <button class="btn btn-primary" (click)="eventHandler($event)">Event handler</button>
    <input #email (keyup.enter)="OnkeyUp(email.value)"/>
    <input [value]="email" (keyup.enter)="oneWayBinding()"/>
    <input [(ngModel)]="email2" (keyup.enter)="twoWayBinding()"/>

    {{"Ali Haider Bhatti Ali Haider Bhatti Ali Haider Bhatti Ali Haider Bhatti Ali Haider Bhatti" | summary:10}}
    
    </div>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>`,
})
export class CourseComponent {
  constructor(service: CoursesService) {
    // let service = new CoursesService()
    this.courses = service.getCourses();
  }
  title = 'List of courses!';
  email = "ali@gmail.com";
  email2 = "hi@gmail.com";
  isActive = true;
  courses;
  getTitle() {
    return this.title;
  }
  clickMe() {
      console.log("click me called!")
  }
  focusMe() {
      console.log("focus me called!")
  }
  eventHandler(event: any) {
      console.log("event handler called!", event)
  }
  OnkeyUp(email: any) {
      console.log(email)
  }
  oneWayBinding() {
      console.log(this.email)
  }
  twoWayBinding() {
      console.log(this.email2)
  }
}
