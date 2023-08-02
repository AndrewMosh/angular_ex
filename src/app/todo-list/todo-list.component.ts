import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  newTodoText: string = '';

  addTodo() {
    if (this.newTodoText.trim() !== '') {
      this.todos.push({ text: this.newTodoText, completed: false });
      this.newTodoText = '';
    }
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
