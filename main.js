import process from 'process';
import { Todo } from "./Todo.js";
import { ListOfTodos } from "./ListOfTodos.js";
import { TodoFunctions } from './TodoFunctions.js';

const args = process.argv.slice(2);
const myTodos = new ListOfTodos;
const myFunctions = new TodoFunctions;

myFunctions.readTodo(myTodos.todos);

switch (args[0]) {
    case '-l':
        myTodos.isEmpty() === true ? console.log('You have no todos for today :)') : console.log(myTodos.listTodos());
        break;
    case '-a':
        myTodos.addTodo(new Todo(args[1]));
        break;
    case '-r':
        myTodos.removeTodo(parseInt(args[1]) - 1);
        break;
    case '-c':
        myTodos.todos[parseInt(args[1]) - 1].doTodo();
        break;
}

myFunctions.writeTodo(myTodos.todos);
myTodos.listTodos();
