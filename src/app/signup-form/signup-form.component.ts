import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required),
  });
  get username(): any {
    return this.form.get('username');
  }
  get password(): any {
    return this.form.get('password');
  }
  onClick(form: any, username: string) {
    console.log('form', form);
    console.log('username', username);
  }
  constructor() {}

  ngOnInit(): void {}

  formArr = new FormGroup({
    topics: new FormArray([]),
  });
  get getTopics() {
    return (this.formArr.get('topics') as FormArray);
  }
  addTopic(topic: HTMLInputElement) {
    this.getTopics.push(
      new FormControl(topic.value)
    );
    topic.value = '';
  }
  removeTopic(topic: FormControl | AbstractControl) {
   let index =   this.getTopics.controls.indexOf(topic as FormControl)
   this.getTopics.removeAt(index)
  }
}

