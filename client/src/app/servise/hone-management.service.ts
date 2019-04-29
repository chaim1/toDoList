import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoneManagementService {

  constructor(private http: HttpClient) {
   }
   getUser(){
     return this.http.get(environment.link + 'users')
   }
}
