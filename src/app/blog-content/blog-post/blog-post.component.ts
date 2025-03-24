import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeApiService } from 'src/app/home-api.service';
import { blogPostVm } from 'src/app/main-class-file';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BlogPostComponent implements OnInit {
  blogPost: blogPostVm | undefined = new blogPostVm();
  blogPosts: blogPostVm[] = new Array<blogPostVm>();
  blogTitle: any;
  blogSlug: string;
  constructor(public service: HomeApiService, private router: Router, private location: Location) { }
  ngOnInit() {
    this.blogPosts = this.service.blogPosts;
    this.blogPost = this.service.blogPost;
    if(this.service.blogPosts.length==0){
      this.getCurrentPost();
    }
  }
  getCurrentPost() {
    window.location.href;
    this.replaceTitle(window.location.href);
  }
  replaceTitle(url: any) {
    if (url) {
      const parts = url.split('/');
      const desiredString = parts[parts.length - 1];
      const stringWithSpaces = desiredString.replace(/-/g, ' '); 
      const words = desiredString.split('-');
      const titleCaseString = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      this.service.getmethod().subscribe(res=>{
        this.blogPosts = res;
        this.blogPost =this.blogPosts.find(f=>f.blogTitle==titleCaseString) ;
      })
    } else {
      this.router.navigate(['blog']);
    }
  }
  getUrl(imageUrl: any) {
    if (imageUrl) {
      return imageUrl.replace("http://localhost:4200/", "");
    }
  }
  onSelect(id: any, back: boolean) {
    if (id > 0) {
      window.scrollTo(0, 0);
      this.blogPost = this.blogPosts.find(f => f.blogId == id);
      this.blogTitle = this.blogPosts.find(f => f.blogId == id)?.blogTitle;
      this.service.blogPost = this.blogPost;
      this.service.blogPosts = this.blogPosts;
      this.blogSlug = this.service.generateSlug(this.blogTitle);
      this.onViewBlog(this.blogSlug);
      // this.isBlogContent = true;
    } else {
      this.blogSlug = "blog";
      this.router.navigate(['blog']);
    }
  }
  onViewBlog(blogSlug: string) {
    this.router.navigate(['blog/blogpost', blogSlug]);
  }
}
