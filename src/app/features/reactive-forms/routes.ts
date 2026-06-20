import { Routes } from '@angular/router';
import { FormControlComponent } from './1.form-control/form-control.component';
import { ValidationsComponent } from './2.validations/validations.component';
import { UsingMarkFunctionsComponent } from './3.using-mark-functions/using-mark-functions.component';
import { SetErrorsComponent } from './4.set-errors/set-errors.component';
import { FormGroupComponent } from './5.form-group/form-group.component';

export const reactiveFormsFormControlRoutes: Routes = [
  { path: 'form-control', component: FormControlComponent },
  { path: 'validations', component: ValidationsComponent },
  { path: 'Using-Mark-Functions', component: UsingMarkFunctionsComponent },
  { path: 'Set-Errors', component: SetErrorsComponent },
  { path: 'Form-Group', component: FormGroupComponent }
];
