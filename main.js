import process from 'process';
import { Todo } from "./Todo.js";
import { ListOfTodos } from "./ListOfTodos.js";
import { TodoFunctions } from './TodoFunctions.js';

const args = process.argv.slice(2);
const myTodos = new ListOfTodos;
const myFunctions = new TodoFunctions;

myFunctions.readTodo(myTodos.todos);

if (args.length === 0) {
    console.log(myFunctions.readFunctionalities());
} else {
    switch (args[0]) {
        case '-l':
            console.log(myTodos.listTodos());
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
        default:
            console.log('Unsupported argument!');
            console.log(myFunctions.readFunctionalities());
    }
}


myFunctions.writeTodo(myTodos.todos);
myTodos.listTodos();