import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();

  onDelete() {
    this.deleteTodo.emit(this.todo);
  }
}
