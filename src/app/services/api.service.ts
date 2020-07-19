import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get() {
    let data = this.http.get<any>('https://randomuser.me/api/?results=500');
    return data;
  }
}
