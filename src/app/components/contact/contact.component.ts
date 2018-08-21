import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  email = new FormControl('', [Validators.required, Validators.email]);
  // Firebase
  private messageCollection: AngularFirestoreCollection<Message>;
  messages: Observable<any[]>;

  constructor(db: AngularFirestore, public snackBar: MatSnackBar) { 
    this.messageCollection = db.collection<Message>('messages');
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  openSnackBar() {
    console.log('Sending email beep boop...');
    let testMessage = {
      name: 'TestUser',
      email: 'a@a',
      phone: '123123123',
      projectDescription: 'Nice on!'
    }
    this.sendMessage(testMessage);
    this.snackBar.open('Your message has been sent ! We will contact you soon.', 'Ok', {
      duration: 2000,
    });
  }

  sendMessage(message: Message) {
    this.messageCollection.add(message);
  }


}
