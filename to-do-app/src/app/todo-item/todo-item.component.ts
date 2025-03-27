import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onToggle(): void {
    this.toggle.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
