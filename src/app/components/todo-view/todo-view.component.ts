import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent{
 @Input() todo:Todo=new Todo();
 @Output() deleteEvent:EventEmitter<number>=new EventEmitter<number>();
 
 constructor(private apiService:ApiService,private location:Location){}
 
 deleteTodo(id:number){
  this.apiService.deleteTodo(id).subscribe({
    next:(data)=>{
      alert("Todo deleted")
      this.deleteEvent.next(id)
    },
    error:(e)=>{
      console.log(e);
    }
  });
 }

 
 MarkAsDone(event:any,id:number){
   this.apiService.mark(id,event.target.checked).subscribe({
    next:(data)=>{
      alert("todo completed")
      this.refresh();
    },
    error:(e)=>{
      console.log(e);
    }
   })
 }

 refresh(){
  window.location.reload();
 }

}
