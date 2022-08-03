import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TaskComponent } from './components/task/task.component';

const appRoutes:Routes=[
  {path:'table',component:TableComponent},
  {path:'task',component:TaskComponent}
 ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
