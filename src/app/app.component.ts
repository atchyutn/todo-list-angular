import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ToDos: any[] = [];
  markAsDone: boolean = true;

  toggleCompletion(todo: any) {
    this.markAsDone = !this.markAsDone
  }

  editTodo(todo: any) {

  }

  deleteTodo(todo: any) {

  }
}
