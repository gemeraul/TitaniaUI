import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  isLinear: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;  
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  step = 0;
  email = new FormControl('', [Validators.required, Validators.email]);
  messageSent: boolean = false;

  constructor(private _formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: this.email,
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
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  openSnackBar() {
    this.step++
    this.snackBar.open('Your message has been sent !', 'Ok', {
      duration: 2000,
    });
    this.messageSent = true;
  }

}
