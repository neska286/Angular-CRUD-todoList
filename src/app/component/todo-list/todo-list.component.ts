import { Component, EventEmitter, OnInit } from '@angular/core';
import { ModalService } from '../../_modal/modal.service';
import { TODO } from '../../model/todo.model';
import { TodoService } from '../../services/todo.service';
import { formatCurrency } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList:TODO[] |null = null;
  isShown: boolean;
  showValidationErrors:boolean = false;
  bodyText: string;
  date: Date;
  editTodoID:number;
  searchText: string;

 
  
  


  constructor(private todoService : TodoService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.listTodos();
    this.date = new Date();
    const lang =localStorage.getItem('lang') || 'en';
    const headers = new HttpHeaders({
      'Accept-Language':lang
    })
  }

  listTodos(){
    this.todoService.list().subscribe((response)=>{
      this.todoList = response;
      console.log(response);
    },(error=>{

    }));
  }
  createTodo(form){
    if(form.invalid) return this.showValidationErrors = true;
    let todo = {
      title:form.value.title
    }
    this.todoService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
    form.reset()
  }

  deleteTodo(id: any){
    this.todoService.delete(id).subscribe((response)=>{
      this.listTodos();
    },(error=>{
    }));
  }
  toggleShow() {
    this.isShown = ! this.isShown;
  }
  todoCompleted(todoList : TODO) {
    todoList.completed = !todoList.completed
   }
  
   openModal(id,todoID) {
    console.log("open popup",todoID);
    // this.openModalList(id);
    this.modalService.open(id);
    this.editTodoID = todoID;
}

closeModal(id: string) {
    this.modalService.close(id);
}

onUpdateModel(event){
  console.log('data',event);
  let data = {
    title:event
  }
  this.todoService.update(this.editTodoID,data).subscribe( res => {
     this.listTodos();
  })
  
}
}
