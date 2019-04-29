import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../servise/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
list;
  constructor(private todolist:ToDoListService) { }

  ngOnInit() {
    this.todolist.getlist().subscribe(res=>{
      this.list = res;
    })
  }

}
