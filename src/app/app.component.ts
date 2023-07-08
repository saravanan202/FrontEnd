import { Component } from '@angular/core';
import { HomeApiService } from './home-api.service';
import { blogPostVm } from './main-class-file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project1';
  main:blogPostVm=new blogPostVm();

  constructor(private apiService:HomeApiService){}

ngOnInit(){
  this.getFirstmethod();
}

  getFirstmethod() {
 /*    this.apiService.getmethod().subscribe(res => {
      this.main = res;

    }); */
  }
}
