//import {MatFormFieldModule} from '@angular/material/form-field';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {
  //aphasiaMail = 'irenegielen@outlook.com';
  aphasiaMail = 'vincent.emonet@gmail.com';

  //email = new FormControl('', [Validators.required, Validators.email]);

  messageForm: FormGroup;
  submitted = false;
  success = false;

  public errorMsg;
  donate = 'I like to support';

  contactMessage: string;
  contactEmail: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      //   name: ['', Validators.required],
      //   lastname: ['',],
         senderEmail: ['', Validators.email],
         messageToSend: ['', Validators.required],
         recaptchaReactive: [null, Validators.required]
      });
   }

  getErrorMessage() {
    return '';
  return this.messageForm.controls.senderEmail.hasError('required') ? 'You must enter a value' :
      this.messageForm.controls.senderEmail.hasError('email') ? 'Not a valid email' :
          '';
  }

  submitForm() {
    console.log('send email');
    console.log(this.messageForm.controls.senderEmail.value);
    console.log(this.messageForm.controls.messageToSend.value)
    this.sendMail();

    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;

    let formData: FormData = new FormData();
    formData.append('email', this.messageForm.controls.senderEmail.value);
    formData.append('text', this.messageForm.controls.messageToSend.value);
    formData.append('firstName', 'not needed');
    formData.append('lastName', 'not needed');
    this.http.post('/api/v1/contactForm', formData)
      .subscribe(data => {
        console.log('Messages saved');
      },
      err => {
        console.log('Error uploading the message.');
        console.log(err);
      }
  );
  }

  sendMail(){
    const formMessage = this.messageForm.controls.messageToSend.value;
    window.location.href = "mailto:" + this.aphasiaMail + "&subject=Contact%20form&body=Sent by " 
    + this.messageForm.controls.senderEmail.value + '\n' + formMessage + " - Aphasia contact form";
  }


}
