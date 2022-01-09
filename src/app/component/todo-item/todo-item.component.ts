import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { TODO } from '../../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
@Input()  todo : TODO;
@Output() todoClicked : EventEmitter<void> = new EventEmitter();
@Output() editClicked: EventEmitter<void> = new EventEmitter()
@Output() deleteClicked : EventEmitter<void> =  new EventEmitter();
@Output() popup : false;
isShown: boolean;


  constructor() { }

  ngOnInit(): void {
  }
  onTodoClicked(){
    this.todoClicked.emit()
  }

  onEditClicked() {
    this.editClicked.emit()
    console.log("edit");
    this.toggleShow
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }
  onDeleteClicked() {
    this.deleteClicked.emit()
    console.log("hello");

  }
}


