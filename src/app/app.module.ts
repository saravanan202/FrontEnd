import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogContentComponent } from './blog-content/blog-content.component'; 
import {HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

const pages = [{
  path: '',
  component: BlogContentComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    BlogContentComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(pages),
    MatCardModule,
    LayoutModule,
    MatMenuModule,
    MatIconModule,
    MdbCollapseModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
