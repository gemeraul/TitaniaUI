import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  
  frontEndTools: Array<any> = [{ name: 'Angular 6' }, { name: 'React' }, { name: 'Bulma' }, { name: 'Angular Material' }];
  backEndTools: Array<any> = [{ name: 'NodeJs' }, { name: 'Python' }, { name: 'MongoDB' }];
  hostingTools: Array<any> = [{ name: 'AWS' }, { name: 'Google Cloud' }, { name: 'Firebase' }, { name: 'Private Servers' }];
  expandOption: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  collapsePanel() {
    this.expandOption = 0;
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

}
