import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BlogContentComponent implements OnInit {
  blogPost = [{
    blogId: 1,
    name: 'Project One description for the',
    description: 'This is the description for the first projection for the first projection for the first projection for the first projection for the first projection for the first projection for the first projection for the first projection for the first project.'
  }, {
    blogId: 2,
    name: 'Project Two description for the',
    description: 'This is the descion for the first projection for the first projection for the first projection for the first projectription for the second project.'
  }, {
    blogId: 3,
    name: 'Project Thre description for thee',
    description: 'Description for third pion for the first projection for the first projection for the first projection for the first projectroject.'
  }, {
    blogId: 3,
    name: 'Project Tw description for theo',
    description: 'This is the description for the second project.'
  }, {
    name: 'Project T description for thewo',
    description: 'This is the description for the second project.'
  }, {
    name: 'Project description for the Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Projec description for thet Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Proje description for thect Two',
    description: 'This is the description for the second project.'
  }];
  isBlogContent: boolean = false;
  blogContent:any;
  blogTitle:any; 

  constructor() { }


  ngOnInit() {
  }
  onSelect(id: any, back: boolean) {
    if (id > 0) {
      this.isBlogContent = true;
      this.blogContent=this.blogPost.find(f=>f.blogId==id)?.description;
      this.blogTitle=this.blogPost.find(f=>f.blogId==id)?.name;
    } else {
      this.isBlogContent = false;
    }
  }
}
