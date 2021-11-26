import process from 'process';
import { Todo } from "./Todo.js";
import { ListOfTodos } from "./ListOfTodos.js";
import { TodoFunctions } from './TodoFunctions.js';

const args = process.argv.slice(2);
const myTodos = new ListOfTodos;
const myFunctions = new TodoFunctions;

myFunctions.readTodo(myTodos.todos);

if (args[0] === '-l') {
    console.log(myTodos.listTodos());
} else if (args[0] === '-a') {
    args[1] === undefined ? console.log('Unable to add: no task provided') : myTodos.addTodo(new Todo(args[1]));
} else if (args[0] === '-r') {
    if (myFunctions.errorHandling(args[1], myTodos.howManyTodos()) === true) myTodos.removeTodo(parseInt(args[1]) - 1);
} else if (args[0] === '-c') {
    if (myFunctions.errorHandling(args[1], myTodos.howManyTodos()) === true) myTodos.todos[parseInt(args[1]) - 1].doTodo();
} else if (args[0] === undefined) {
    console.log(myFunctions.readFunctionalities());
} else {
    console.log('Unsupported argument!');
    console.log(myFunctions.readFunctionalities());
}

myFunctions.writeTodo(myTodos.todos);