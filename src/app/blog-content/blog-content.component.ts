import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {

  projects = [{
    name: 'Project One',
    description: 'This is the description for the first project.'
  }, {
    name: 'Project Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Project Three',
    description: 'Description for third project.'
  }];

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';
  
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );
    
  constructor(private breakpointObserver: BreakpointObserver) { }


  ngOnInit() {
  }
}
