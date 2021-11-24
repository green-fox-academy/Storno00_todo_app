import fs from 'fs';
import { Todo } from "./Todo.js";

export class TodoFunctions {
    readTodo(myTodos) {
        let inputData = fs.readFileSync('savedTodos.json', 'utf-8');
        if (inputData.length === 0) {
            console.log('No todos for today :)');
        } else {
            let fileArray = JSON.parse(inputData);
            for (let i = 0; i < fileArray.length; i++) {
                myTodos.push(new Todo(fileArray[i].todoString, fileArray[i].isDone));
            }
        }  
    }
    writeTodo(myTodos) {
        const output = JSON.stringify(myTodos);
        fs.writeFileSync('savedTodos.json', output);
    }
    readFunctionalities() {
        return fs.readFileSync('functionalities.txt', 'utf-8');
    }
}