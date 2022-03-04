import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDos: any[] = [];
  markAsDone: boolean = true;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.todoService.getTodos()
      .subscribe(res => {
        this.toDos = res;
      })
  }

  toggleCompletion(todo: any) {
    this.markAsDone = !this.markAsDone
  }

  editTodo(todo: any) {

  }

  deleteTodo(todo: any) {

  }
}
