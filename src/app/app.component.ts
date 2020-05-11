import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  title = 'app';
  // Version number format: App Change . Fixes/Changes . YearWWDay
  version = '2.0.192704';

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => window.scrollTo(0, 0));
    console.log('Version: ', this.version);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
