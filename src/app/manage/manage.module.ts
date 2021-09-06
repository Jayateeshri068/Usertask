import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    ManageComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManageModule { }
