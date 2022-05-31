import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksCenzorComponent } from './pages/works/works-cenzor/works-cenzor.component';
import { WorksTaskComponent } from './pages/works/works-task/works-task.component';
import { WorksUsersComponent } from './pages/works/works-users/works-users.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
{path:'', pathMatch:'full', component:HomeComponent},
{path:'works', component:WorksComponent, children:[
  {path:'cenzor', component:WorksCenzorComponent},
  {path:'users', component:WorksUsersComponent},
  {path:'task', component:WorksTaskComponent}
] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
