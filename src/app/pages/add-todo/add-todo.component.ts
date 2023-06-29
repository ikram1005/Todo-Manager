import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  constructor(private apiService:ApiService){}

    todo=new Todo();
    submitForm(event:SubmitEvent){
      event.preventDefault()
      this.apiService.addTodo(this.todo).subscribe({
        next:(data)=>{
          alert("todo added")
          this.todo=new Todo();
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("request completed");
        },
      });
    }
}
