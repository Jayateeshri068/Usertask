import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent} from './manage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [{path:'',component:ManageComponent,
children:[
  {path:'',component:RegisterComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'user-list',component:UserListComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
