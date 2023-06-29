import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl='http://localhost:8080/todo';
  constructor(private http:HttpClient) { }
  addTodo(todo:Todo){
    return this.http.post<Todo>(`${this.baseUrl}/create`,todo);
  }

  getTodo(){
    return this.http.get<Todo[]>(`${this.baseUrl}/getAll`);
  }

  deleteTodo(id:number){
    return this.http.delete(`${this.baseUrl}/${id}/delete`);
  }

  UpdateTodo(id:number,todo:Todo){
    return this.http.put<Todo>(`${this.baseUrl}/${id}/update`,todo);
  }

  get(id:number){
    return this.http.get<Todo>(`${this.baseUrl}/${id}/getTodo`)
  }

  mark(id:number,done:boolean){
    return this.http.put<Todo>(`${this.baseUrl}/${id}/${done}`,null);
  }
}
