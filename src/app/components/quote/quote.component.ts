import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Quote {
  name: string;
  email: string;
  phone: string;
  industry: string;
  projectDescription: string;
  deliveryDate: string;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // Quote Form
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fullName = '';
  email = '';
  phone = '';
  industry = '';
  description = '';
  deliveryDate = '';
  quote: Quote;
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  step = 0;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageSent = false;

  // Firebase
  private quotesCollection: AngularFirestoreCollection<Quote>;
  quotes: Observable<any[]>;

  constructor(db: AngularFirestore, private _formBuilder: FormBuilder, public snackBar: MatSnackBar) {
    this.quotesCollection = db.collection<Quote>('quotes');
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: this.emailControl,
      fullName: [null, Validators.required],
      phone: [null, Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      industry: [null, Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      description: [null, Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      date: [null, Validators.required]
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
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
    this.messageSent = true;
  }

  saveQuote(quote: Quote) {
    this.quotesCollection.add(quote);
  }

  submitQuote() {
    console.log('Sending email beep boop...');
    this.quote = {
      name: this.firstFormGroup.get('fullName').value,
      email: this.firstFormGroup.get('email').value,
      phone: this.firstFormGroup.get('phone').value,
      industry: this.secondFormGroup.get('industry').value,
      projectDescription: this.thirdFormGroup.get('description').value,
      deliveryDate: this.fourthFormGroup.get('date').value,
    };
    this.saveQuote(this.quote);
    // TODO: Probably better to add this in saveQuote() as a resolve path of promise?
    this.step++;
    this.openSnackBar();
  }

}
