import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { BlogPostComponent } from './blog-content/blog-post/blog-post.component';
import { EmployeeSPComponent } from './employee-sp/employee-sp.component';

const routes: Routes = [
  // Other routes if any
  { path: 'home', component: HomeContentComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'blog', component: BlogContentComponent },

  { path: 'blog/blogpost/:slug', component: BlogPostComponent },

  { path: 'empSp', component: EmployeeSPComponent },


  /* 
  { path: '', redirectTo:'blog/blogpost/:slug',pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
