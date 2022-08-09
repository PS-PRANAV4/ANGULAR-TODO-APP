import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Task } from './inte';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://127.0.0.1:8000/';

  constructor(private http:HttpClient) { }

  getTask():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.APIUrl);
  
  }
  addTask(val:any)
  {
    return this.http.post<string>(this.APIUrl,val)
  }
deletTask(val:any)
{
  return this.http.delete<string>(this.APIUrl+val)
}





}
