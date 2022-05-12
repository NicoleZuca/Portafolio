import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
  
    return of(data.posts);
    //return this.http.get(url); // GET  http://localhost:3000/
  }

  public post(url:string, body){
    return this.http.post(url,body); // POST  
  }
}
