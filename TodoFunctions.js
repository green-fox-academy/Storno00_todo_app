import fs from 'fs';
import { Todo } from "./Todo.js";

export class TodoFunctions {
    readTodo(myTodos) {
        let fileArray = JSON.parse(fs.readFileSync('savedTodos.json', 'utf-8'));

        for (let i = 0; i < fileArray.length; i++) {
            myTodos.push(new Todo(fileArray[i].todoString, fileArray[i].isDone));
        }
    }
    writeTodo(myTodos) {
        const output = JSON.stringify(myTodos);
        fs.writeFileSync('savedTodos.json', output);
    }
}