import { Component,HostListener, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('contact')
  contact!: ElementRef;
  menuOpen = false;
  isMobile: boolean = false;
  public sidebarShow: boolean = false;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.checkScreenSize();
  }
  constructor() { }

  ngOnInit() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 500;
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

 