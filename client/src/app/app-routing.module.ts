import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddToDoListComponent } from './add-to-do-list/add-to-do-list.component';


const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'toDoList', component: ToDoListComponent},
  {path: 'addToDoList', component: AddToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
