import { Routes } from '@angular/router';
import { routes as templateDrivenFormsRoutes } from './features/template-driven-forms/routes';
import { reactiveFormsFormControlRoutes } from './features/reactive-forms/1.form-control/routes';

export const routes: Routes = [
  { path: 'template-driven-forms', children: templateDrivenFormsRoutes },
  { path: 'reactive-forms', children: reactiveFormsFormControlRoutes },
];
