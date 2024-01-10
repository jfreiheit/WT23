import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent }
];
