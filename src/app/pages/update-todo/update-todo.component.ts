import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  todo:Todo=new Todo();

  constructor(private apiService:ApiService,private ar:ActivatedRoute,private route:Router){}

    ngOnInit(): void {

    const id = this.ar.snapshot.paramMap.get('id');
    const tid=Number(id);
    
    
    this.apiService.get(tid||0).subscribe({
       next:(data)=>{
        this.todo=data;
       },
       error:(e)=>{
        console.log(e);
       }
    })
  }

  updateTodo(event:SubmitEvent){
    this.apiService.UpdateTodo(this.todo.id,this.todo).subscribe({

      next:(data)=>{
        alert('todo updated..')
        this.todo=data;
        this.route.navigate(['/view-todos'])
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }

 


}
