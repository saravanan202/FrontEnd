import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';
import { HomeApiService } from '../home-api.service';
import { blogPostVm } from '../main-class-file';
import { DomSanitizer, SafeResourceUrl, SafeUrl  } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
export class BlogContentComponent implements OnInit  {
  blogPost: blogPostVm | undefined = new blogPostVm();
  blogPosts: blogPostVm[] = new Array<blogPostVm>();
  isBlogContent: boolean = false;
  blogContent: any;
  blogTitle: any;
  blogId: number;
  temp:any;
  blogSlug: string;

  constructor(public service: HomeApiService, 
    private router: Router, private sanitizer: DomSanitizer, 
    private renderer: Renderer2) { }


  ngOnInit() {
    if(this.service.blogPosts.length){
      this.blogPosts = this.service.blogPosts;
    }else{
    this.service.getmethod().subscribe((res) => {
      this.blogPosts = res;
    });
  }
  }
  getUrl(imageUrl: any)   {
    if(imageUrl){
    return imageUrl.replace("http://localhost:4200/", "");
    }
  }
  onSelect(id: any, back: boolean) {
    if (id > 0) {
      window.scrollTo(0, 0);
      this.blogPost = this.blogPosts.find(f=>f.blogId == id);
      this.blogTitle = this.blogPosts.find(f=>f.blogId == id) ?.blogTitle;
      this.service.blogPost=this.blogPost;
      this.service.blogPosts=this.blogPosts;
      this.blogSlug = this.service.generateSlug(this.blogTitle);
      this.onViewBlog(this.blogSlug); 
     // this.isBlogContent = true;
    } else {
      this.blogSlug="";
      this.onViewBlog(this.blogSlug); 
     // this.isBlogContent = false;
    }
  }
  onViewBlog(blogSlug: string) {
    this.router.navigate(['blog/blogpost', blogSlug]);
  }

}
