import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  todoList: string[] = [];
  todoinp: string = '';

  ngOnInit() {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      this.todoList = JSON.parse(storedTodoList);
    }
  }

  todo() {
    console.log(this.todoinp);
    if (this.todoinp.trim() !== '') {
      this.todoList.push(this.todoinp.trim());
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
    this.todoinp = '';
  }

  delete(item: string, index: number) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
      console.log(`Item '${item}' at index ${index} deleted successfully.`);
    } else {
      console.log(`Invalid index ${index}.`);
    }
  }
}
