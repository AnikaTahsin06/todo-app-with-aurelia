import { Todo } from "./todo";

export class App {
  constructor() {
    this.message = "Hello World!";
    this.todoList = [];
    this.todoList.push(new Todo("Complete aurelia"));
    this.todoList.push(new Todo("Complete aurelia todo app"));
    this.todoList.push(new Todo("Complete aurelia blog app"));
    this.newItem = "";
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = "";
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
