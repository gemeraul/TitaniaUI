import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  lovedCount = 4;

  constructor(private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  loveProduct() {
    this.lovedCount++;
    this.openSnackBar()
  }

  openSnackBar() {
    this.snackBar.open('Thank you for your interest!', ':)', {
      duration: 4000,
    });
  }

}
