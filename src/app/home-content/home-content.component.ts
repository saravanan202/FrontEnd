import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { blogPostVm, subscriber } from '../main-class-file';
import { HomeApiService } from '../home-api.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeContentComponent implements OnInit {

  isSubscribed: boolean = false;
  isSubscribedExist: boolean = false;
  subscriber: subscriber = new subscriber();
  @ViewChild('myForm') myForm: NgForm;
  blogPost: blogPostVm | undefined = new blogPostVm();
  blogPosts: blogPostVm[] = new Array<blogPostVm>();
  recentNews: blogPostVm[] = new Array<blogPostVm>();
  isBlogContent:boolean;
  blogTitle:any;
  blogSlug: string;
  featurePost1:blogPostVm | undefined = new blogPostVm();
  featurePost2:blogPostVm | undefined = new blogPostVm();
  constructor(public homeApi: HomeApiService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.homeApi.getmethod().subscribe((res) => {
      this.blogPosts = res;
      this.recentNews=this.blogPosts.slice(0,2);
      this.featurePost1 = this.blogPosts.find(f=>f.blogId == 2);
      this.featurePost2 = this.blogPosts.find(f=>f.blogId == 4);
    });
  }
  
  onSelect(id: any) {
    if (id > 0) {
      window.scrollTo(0, 0);
      this.isBlogContent = true;
      this.blogPost = this.blogPosts.find(f=>f.blogId == id);
      this.blogTitle = this.blogPosts.find(f=>f.blogId == id) ?.blogTitle;
      this.homeApi.blogPost=this.blogPost;
      this.homeApi.blogPosts=this.blogPosts;
      this.blogSlug = this.homeApi.generateSlug(this.blogTitle);
        this.router.navigate(['blog/blogpost', this.blogSlug]);
    } else {
      this.isBlogContent = false;
    }
  }
  getUrl(imageUrl: any)   {
    if(imageUrl){
    return imageUrl.replace("http://localhost:4200/", "");
    }
  }
  onSubmit() {
    if(this.myForm.valid){
    this.homeApi.subscriber(this.subscriber).subscribe(res => {
      if (res) {
        this.isSubscribed = true;
        this.isSubscribedExist =false;
      } else {
        this.isSubscribedExist = true;
        this.isSubscribed = false;
      }
    });
  }
  }
}
