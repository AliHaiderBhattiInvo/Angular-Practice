import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public firstName: string = "";
  comment: string = ""
  isSubscribed: boolean = true
  log(name: string) {
    console.log("Name is", name)
  }

  submit(f: any) {
    console.log("f", f)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
