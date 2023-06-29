import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {
  todos:Todo[]=[];
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.getTodo().subscribe({
      next:(data)=>{
        this.todos=data
      },
      error:(e)=>{
        console.log(e);
        alert('No todos found')
      },
      complete:()=>{}
    });
    
  }
  deleteCard(id:number){
    this.todos=this.todos.filter(todo=>todo.id!=id)
  }
}
