import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { blogPostVm } from './main-class-file';
import { Observable } from 'rxjs/internal/Observable';
import { EmailJSResponseStatus } from 'emailjs-com';
import * as emailjs from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  private serviceId = 'service_s5ekctv';
  private templateId = 'template_6ivsyps';
  private userId = 'O42Pe4ftmfCQCYI_u';

  constructor(private httpClient: HttpClient) { 
    emailjs.init(this.userId);
  }

  getmethod( ): Observable<blogPostVm[]> {
    let url = `http://localhost:40689/Blog/GetPost`;
    return this.httpClient.get<blogPostVm[]>(url);
  }
  sendEmail(name: string, email: string, message: string): Promise<EmailJSResponseStatus> {
    const emailParams = {
      name: name,
      email: email,
      message: message
    };

    return emailjs.send(this.serviceId, this.templateId, emailParams);
  }

}
