import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore
  @ViewChild('f', {static: false}) simpleForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.simpleForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

/*  onSubmit(form: NgForm) {
    console.log(form);
  } */

  onSubmit() {
    this.submitted = true;
    this.user.username = this.simpleForm.value.userData.username;
    this.user.email = this.simpleForm.value.userData.email;
    this.user.secret = this.simpleForm.value.secret;
    this.user.answer = this.simpleForm.value.questionAnswer;
    this.user.gender = this.simpleForm.value.gender;
    this.simpleForm.reset();
  }
}
