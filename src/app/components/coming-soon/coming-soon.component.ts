import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  color = 'primary';
  mode = 'indeterminate';
  loading: boolean = true;

  constructor(private countdownService: CountdownService, private router: Router) {
    this.countdownService.createCountdownService()
      .subscribe(data => {
        this.days = (Math.floor(data / (1000 * 60 * 60 * 24)));
        this.hours = (Math.floor(data % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.minutes = (Math.floor(data % ((1000 * 60 * 60)) / (1000 * 60)));
        this.seconds = (Math.floor(data % ((1000 * 60)) / 1000));
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

}
