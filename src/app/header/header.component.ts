import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('contact')
  contact!: ElementRef;
  menuOpen = false;

  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
/* git status

git commit -m new projects share

git push 

user
 password */

 