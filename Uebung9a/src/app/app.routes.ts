import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: 'test', component: TestComponent }
];
