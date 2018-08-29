import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Message {
  name: string,
  email: string,
  phone: string,
  projectDescription: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Contact Form
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  contactFormGroup: FormGroup;
  fullName: string = '';
  email: string = '';
  phone: string = '';
  description: string = '';
  message: Message;

  // Firebase
  private messageCollection: AngularFirestoreCollection<Message>;
  messages: Observable<any[]>;

  constructor(db: AngularFirestore, public snackBar: MatSnackBar, private _formBuilder: FormBuilder) { 
    this.messageCollection = db.collection<Message>('messages');
  }

  ngOnInit() {
    this.contactFormGroup = this._formBuilder.group({
      email: this.emailControl,
      fullName: [null, Validators.required],
      phone: [null],
      description: [null, Validators.required],
    });
  }

  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
        this.emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }

  openSnackBar() {
    this.snackBar.open('Your message has been sent ! We will contact you soon.', 'Ok', {
      duration: 2000,
    });
  }

  submitContactForm() {
    console.log('Sending email beep boop...');
    this.message = {
      name: this.contactFormGroup.get('fullName').value,
      email: this.contactFormGroup.get('email').value,
      phone: this.contactFormGroup.get('phone').value,
      projectDescription: this.contactFormGroup.get('description').value
    }
    this.sendMessage(this.message);
    // TODO: Probably better to add this in sendMessage() as a resolve path of promise? 
    this.openSnackBar();
  }

  sendMessage(message: Message) {
    this.messageCollection.add(message);
  }


}
