import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Quote {
  name: string,
  email: string,
  phone: string,
  industry: string,
  projectDescription: string,
  deliveryDate: string
}

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  // Quote Form
  isLinear: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fullName: string = '';
  email: string = '';
  phone: string = '';
  industry: string = '';
  description: string = '';
  deliveryDate: string = '';
  quote: Quote;
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  step = 0;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageSent: boolean = false;
  
  frontEndTools: Array<any> = [{ name: 'Angular 6' }, { name: 'React' }, { name: 'Bulma' }, { name: 'Angular Material' }];
  backEndTools: Array<any> = [{ name: 'NodeJs' }, { name: 'Python' }, { name: 'MongoDB' }];
  hostingTools: Array<any> = [{ name: 'AWS' }, { name: 'Google Cloud' }, { name: 'Firebase' }, { name: 'Private Servers' }];
  expandOption: number = 0;
  // Firebase
  private quotesCollection: AngularFirestoreCollection<Quote>;
  quotes: Observable<any[]>;

  constructor(db: AngularFirestore, private _formBuilder: FormBuilder, public snackBar: MatSnackBar) {
    this.quotesCollection = db.collection<Quote>('quotes');
    // this.quotes = db.collection('/quotes').valueChanges();
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

  collapsePanel() {
    this.expandOption = 0;
  }

  saveQuote(quote: Quote) {
    this.quotesCollection.add(quote);
  }

  submitQuote() {
    console.log('Sending email beep boop...');
    this.quote = {
      name: this.fullName,
      email: this.email,
      phone: this.phone,
      industry: this.industry,
      projectDescription: this.description,
      deliveryDate: this.deliveryDate
    }
    this.saveQuote(this.quote);
    // TODO: Probably better to add this in saveQuote() as a resolve path of promise? 
    this.step++;
    this.openSnackBar();
  }

}
