import { Component } from '@angular/core';
import { Todo } from '../todo-model';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoInputComponent, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodoHandler(todo: Todo): void {
    this.todos.push(todo);
  }

  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodoHandler(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
