import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  designTools: Array<any> = [{ name: 'Adobe Illustrator' }, { name: 'Adobe Photoshop' }];
  prototypeTools: Array<any> = [{ name: 'Adobe XD' }, { name: 'Proto.io' }, { name: 'Sketch' }];
  accessiblityTools: Array<any> = [{ name: 'Material Design' }, { name: 'WCAG 2.0' }];
  expandOption: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  collapsePanel() {
    this.expandOption = 0;
  }

}
