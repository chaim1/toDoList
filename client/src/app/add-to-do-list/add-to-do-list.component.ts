import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToDoListService } from '../servise/to-do-list.service';
import { HoneManagementService } from '../servise/hone-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-do-list',
  templateUrl: './add-to-do-list.component.html',
  styleUrls: ['./add-to-do-list.component.css']
})
export class AddToDoListComponent implements OnInit {
  users;
  addToDo: FormGroup;
  constructor(private toDoServise: ToDoListService,private userService: HoneManagementService,private router: Router) {
    this.userService.getUser().subscribe(res=>{
      console.log(res);
      this.users = res;
       
    })
   }

  ngOnInit() {
    this.addToDo = new FormGroup({
      ToDoData: new FormGroup({
        title: new FormControl(null),
        name: new FormControl(null),
        date: new FormControl(null)
      })
    })
  }
  onAdd(){
    this.toDoServise.postToDo(this.addToDo.value.ToDoData).subscribe(res=>{
      console.log(res);
      this.router.navigate(['toDoList'])
    })
  }
}
