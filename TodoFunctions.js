import { Console } from 'console';
import fs from 'fs';
import { parse } from 'path';
import { Todo } from "./Todo.js";

export class TodoFunctions {
    readTodo(myTodos) {
        let inputData = '[]';
        try {
            inputData = fs.readFileSync('savedTodos.json', 'utf-8');
        } catch (error) {}
        let fileArray = JSON.parse(inputData);
        for (let i = 0; i < fileArray.length; i++) {
            myTodos.push(new Todo(fileArray[i].todoString, fileArray[i].isDone));
        }
    }
    writeTodo(myTodos) {
        const output = JSON.stringify(myTodos);
        fs.writeFileSync('savedTodos.json', output);
    }
    readFunctionalities() {
        return fs.readFileSync('functionalities.txt', 'utf-8');
    }
    errorHandling(arg, numberOfTodos) {
        if (arg === undefined) {
            console.log('Unable to remove: no index provided');
        } else if (parseInt(arg) > numberOfTodos && !isNaN(arg)) {
            console.log('Unable to remove: index is out of bound');
        } else if (isNaN(parseInt(arg))) {
            console.log('Unable to remove: index is not a number');
        } else {
            return true;
        }
    }
}