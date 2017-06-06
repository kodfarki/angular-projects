import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service'
import {textDef} from "@angular/core/src/view";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos;
    text;
    oldText;
    appState = "default";

    constructor(private _todoService: TodoService) {
    }

    ngOnInit() {
        this.todos = this._todoService.getTodos();
    }

    addTodo() {
            this.todos.push({text: this.text});
            this._todoService.update(this.todos);
    }

    updateTodo() {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].text === this.oldText) {
                this.todos[i].text = this.text;
                break;
            }
        }
        this._todoService.update(this.todos);
    }

    deleteTodo(deleteTask) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].text === deleteTask) {
                this.todos.splice(i, 1);
                break;
            }
        }
        this._todoService.update(this.todos);
    }

    editTodo(todo) {
        this.appState = "edit";
        console.log(this.appState);
        this.text = todo.text;
        this.oldText = todo.text;
    }
}
