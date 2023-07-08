import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';
import { HomeApiService } from '../home-api.service';
import { blogPostVm } from '../main-class-file';

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
  blogPost: blogPostVm = new blogPostVm();
  blogPosts: blogPostVm[] = new Array<blogPostVm>();
  isBlogContent: boolean = false;
  blogContent: any;
  blogTitle: any;
  blogId: number;
  constructor(public service: HomeApiService) { }


  ngOnInit() {
    this.service.getmethod().subscribe((res) => {
      this.blogPosts = res;
    });
  }
  onSelect(id: any, back: boolean) {
    if (id > 0) {
      this.isBlogContent = true;
      this.blogContent = this.blogPosts.find(f=>f.blogId == id)?.blogContent;
      this.blogTitle = this.blogPosts.find(f=>f.blogId == id) ?.blogTitle;
    } else {
      this.isBlogContent = false;
    }
  }
}
