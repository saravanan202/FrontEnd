import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { blogPostVm, subscriber } from './main-class-file';
import { Observable } from 'rxjs/internal/Observable';
import { EmailJSResponseStatus } from 'emailjs-com';
import * as emailjs from 'emailjs-com';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  private serviceId = 'service_s5ekctv';
  private templateId = 'template_6ivsyps';
  private userId = 'O42Pe4ftmfCQCYI_u';
  private apiUrl=`https://localhost:44377 /` 
  //private apiUrl=`https://suntechie.com/`
 componentSource=new Subject<string[]>();
 blogPost: blogPostVm | undefined = new blogPostVm();
 blogPosts: blogPostVm[] = new Array<blogPostVm>();

  constructor(private httpClient: HttpClient) { 
    emailjs.init(this.userId);
  }
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  getmethod( ): Observable<blogPostVm[]> {
    //let url = `/Blog/GetPost`;
    let url = `${this.apiUrl}Blog/GetPost`;
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
  subscriber(subscriberData: any): Observable<subscriber> {
    //let url = `https://localhost:44377/Blog/Subscribe`;
    let url = `${this.apiUrl}Blog/Subscribe`;
    let body = subscriberData;

    return this.httpClient.post<subscriber>(url, body);
  }

  //SP FOR EMPLOYEE
  getEmployees(): Observable<any[]> {
    let url = `${this.apiUrl}Blog/GetEmployeePayments`;
    return this.httpClient.get<any[]>(url);
  }

  addEmployee(employee: any): Observable<any> {
    let url = `${this.apiUrl}Blog/CreateEmployee`;
    return this.httpClient.post(url, employee);
  }
  deleteRecords(id: number) {
    let url = `${this.apiUrl}Blog/DeleteEmployee`;
    let param = new HttpParams({
      fromObject: { id: id }
    });
    return this.httpClient.delete(url, { params: param });
  }
/*   componentLoader(compo: string[]){
    this.componentSource.next(compo)
  } */
}
