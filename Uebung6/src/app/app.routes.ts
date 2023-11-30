import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: "create", component: FormComponent },
  { path: "read", component: TableComponent }
];
