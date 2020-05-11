import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Portfolio { name: string; loveCount: number; }
export interface PortfolioId extends Portfolio { id: string; }

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  lovedCounters = [];
  // Firebase
  private portfolioCollection: AngularFirestoreCollection<Portfolio>;
  portfolios: PortfolioId[];
  item: Observable<Portfolio>;

  constructor(private db: AngularFirestore, private router: Router, public snackBar: MatSnackBar) {
    this.portfolioCollection = db.collection<Portfolio>('portfolios');
    this.portfolioCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Portfolio;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }))
      .subscribe(result => this.portfolios = result);
  }

  ngOnInit() {

  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  loveProduct(item: PortfolioId, count) {
    if (item) {
      count++;
      this.db.collection('portfolios').doc(item.id).update({ loveCount: count, name: 'inventory' })
        .then(result => {
          this.openSnackBar();
        });
    }

  }

  openSnackBar() {
    this.snackBar.open('Thank you for your interest!', '=)', {
      duration: 4000,
    });
  }

}
