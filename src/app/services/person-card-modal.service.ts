import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

// Component to use
import { PersonCardComponent, PersonCardParams } from '../components/person-card/person-card.component';

@Injectable({
  providedIn: 'root'
})
export class PersonCardModalService {

  constructor(private matDialog: MatDialog) { }

  openModal(params?: PersonCardParams): MatDialogRef<PersonCardComponent, string[]> {
    return this.matDialog.open<PersonCardComponent, any, string[]>(PersonCardComponent, {
      width: '70vw',
      height: '60vw',
      minHeight: '350px',
      minWidth: '400px',
      maxWidth: '900px',
      maxHeight: '450px',
      data: params,
      panelClass: 'field-selector-modal',
      autoFocus: false
    });
  }
}
