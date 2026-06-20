import { Routes } from '@angular/router';
import { FormControlComponent } from './1.form-control/form-control.component';
import { ValidationsComponent } from './2.validations/validations.component';
import { UsingMarkFunctionsComponent } from './3.using-mark-functions/using-mark-functions.component';

export const reactiveFormsFormControlRoutes: Routes = [
  { path: 'form-control', component: FormControlComponent },
  { path: 'validations', component: ValidationsComponent },
  { path: 'Using-Mark-Functions', component: UsingMarkFunctionsComponent }
];
