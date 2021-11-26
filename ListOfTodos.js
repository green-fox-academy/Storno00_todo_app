export class ListOfTodos {
    todos = [];

    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(index) {
        this.todos.splice(index, 1);
    }
    howManyTodos() {
        return this.todos.length;
    }
    listTodos() {
        let outputString = '';

        for (let i = 0; i < this.todos.length; i++) {
            outputString += `${i + 1} - [${this.todos[i].isDone === true ? 'x' : ' '}] ${this.todos[i].todoString}\n`;
        }
        return outputString;
    }
}