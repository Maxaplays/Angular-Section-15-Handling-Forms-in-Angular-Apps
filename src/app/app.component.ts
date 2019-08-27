import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: true}) simpleForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.simpleForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    console.log(this.simpleForm.value);
  }

/*  onSubmit(form: NgForm) {
    console.log(form);
  } */

  onSubmit() {
    console.log(this.simpleForm);
  }
}
