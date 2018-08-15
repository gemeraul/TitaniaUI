import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active: boolean = false;
  drop: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  activateMenu() {
    this.active = !this.active
  }

  dropMenu() {
    this.drop = !this.drop;
  }

  closeDropdown() {
    this.drop = false;
  }

}
