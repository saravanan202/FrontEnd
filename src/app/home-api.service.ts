import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MainClassFile } from './main-class-file';
import { Observable } from 'rxjs/internal/Observable';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


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

  getmethod(): Observable<MainClassFile> {
    let url = `https://jsonplaceholder.typicode.com/todos/1`;
    return this.httpClient.get<MainClassFile>(url);
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
