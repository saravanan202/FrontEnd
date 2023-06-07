import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  // Other routes if any
  { path: 'home', component: HomeContentComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'blog', component: BlogContentComponent },

  { path: 'contact', component: ContactComponent },

  // Other routes if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
