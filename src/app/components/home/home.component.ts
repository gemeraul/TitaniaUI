import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createProject(type) {
    this.router.navigateByUrl('/' + type);
  }

  scrollToOptions() {
    document.getElementById("optionsElem").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
