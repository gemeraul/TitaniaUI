import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

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
  isLinear = false;
  firstFormGroup: FormGroup;
  fullName = '';
  email = '';
  phone = '';
  industry = '';
  description = '';
  deliveryDate = '';
  quote: Quote;
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  step = -1;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  fullNameControl = new FormControl('', Validators.required);
  phoneControl = new FormControl('', Validators.required);
  industryControl = new FormControl('', Validators.required);
  descriptionControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
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
      industry: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required]
    });

    setTimeout(() => {
      this.step = 0;
    }, 400);
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

  getEmailErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
      this.emailControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  getRequiredErrorMessage() {
    return this.fullNameControl.hasError('required') ? 'You must enter a value' :
      '';
  }

  openSnackBar() {
    this.snackBar.open('Your message has been sent ! We will contact you soon.', 'Ok', {
      duration: 4000,
    });
    this.messageSent = true;
  }

  saveQuote(quote: Quote) {
    this.quotesCollection.add(quote);
  }

  submitQuote() {
    console.log('Sending email beep boop...');
    this.quote = {
      name: this.fullNameControl.value,
      email: this.emailControl.value,
      phone: this.phoneControl.value,
      industry: this.industryControl.value,
      projectDescription: this.descriptionControl.value,
      deliveryDate: this.dateControl.value,
    };
    this.saveQuote(this.quote);
    // TODO: Probably better to add this in saveQuote() as a resolve path of promise?
    this.step++;
    this.openSnackBar();
  }

}
