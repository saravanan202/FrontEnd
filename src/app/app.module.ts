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
import {MatButtonModule} from '@angular/material/button';
import {NgbPaginationModule, NgbAlertModule} from'@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeContentComponent } from './home-content/home-content.component';

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
    ContactComponent,
    HomeContentComponent,
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
    MdbCollapseModule,
    MatButtonModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
