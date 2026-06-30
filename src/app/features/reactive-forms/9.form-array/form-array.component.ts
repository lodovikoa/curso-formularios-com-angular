import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';
import { avoidRepeatedEmail } from './validations/avoid-repeated-email.validator';

@Component({
  selector: 'app-form-array',
  imports: [ ReactiveFormsModule, ErrorMessagesComponent, JsonPipe ],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormArrayComponent {

  protected form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    emails: new FormArray([ this.createFormControl() ], { validators: [Validators.required] })
  });

  protected addEmail() {
    this.form.controls.emails.push(this.createFormControl());
  }

  protected removeEmail(index: number) {
    this.form.controls.emails.removeAt(index);
  }

  private createFormControl() {
    return new FormControl('', { validators: [Validators.required, Validators.email, avoidRepeatedEmail ] });
  }
}
