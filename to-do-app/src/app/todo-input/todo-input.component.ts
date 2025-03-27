import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  taskTitle: string = '';
  
  @Output() addTodo = new EventEmitter<Todo>();

  onAddTask(): void {
    if (this.taskTitle.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        title: this.taskTitle,
        completed: false
      };
      this.addTodo.emit(newTask);
      this.taskTitle = ''; 
    }
  }
}
