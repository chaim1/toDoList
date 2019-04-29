import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private http: HttpClient) { }
  postToDo(toDo){
    return this.http.post(environment.link+'addToDo', toDo)
  }
  getlist(){
    return this.http.get(environment.link+'listTOdo')
  }
}
