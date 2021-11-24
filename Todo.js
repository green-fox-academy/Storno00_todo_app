export class Todo {
    constructor(todoString, isDone = false) {
        this.todoString = todoString;
        this.isDone = isDone;
    }
    doTodo() {
        this.isDone = true;
    }
}