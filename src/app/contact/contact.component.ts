import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { HomeApiService } from '../home-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  formData: any = {};
  thankYou: boolean = true;
  constructor(private formBuilder: FormBuilder, private homeApiService: HomeApiService) { }

  ngOnInit() {
  }

  submitForm() {
    this.homeApiService.sendEmail(this.formData.name, this.formData.email, this.formData.message)
      .then(response => {
        console.log('Email sent successfully!', response);
        this.thankYou = false;
        this.formData={};
        // Display success message or perform any desired action
      })
      .catch(error => {
        console.error('Error sending email:', error);
        // Display error message or perform any desired action
      });
  }
}
