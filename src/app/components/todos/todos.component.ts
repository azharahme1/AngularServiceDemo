import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe(
      todos => this.todos = todos
    )
  }

}
