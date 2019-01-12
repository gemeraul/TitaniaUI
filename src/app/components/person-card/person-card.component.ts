import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PersonCardParams {
  name: string;
  title: string;
  experience: string;
  tech_list: Array<string>;
}

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  name: string;
  experience: string;
  tech_list: Array<string>;

  constructor(
    @Optional() public matDialogRef: MatDialogRef<PersonCardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: PersonCardParams,
  ) {
    Object.assign(this, data);
  }

  ngOnInit() {
  }

}
