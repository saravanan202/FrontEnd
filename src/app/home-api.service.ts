import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { MainClassFile } from './main-class-file';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(private httpClient: HttpClient) { }

getmethod():Observable<MainClassFile>{
  let url=`https://jsonplaceholder.typicode.com/todos/1`;
  return this.httpClient.get<MainClassFile>(url);
}


}
