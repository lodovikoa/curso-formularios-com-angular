import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, ErrorMessagesComponent, JsonPipe ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {

  private readonly fb = inject(NonNullableFormBuilder);

  protected form = this.fb.group({
    // name: ['', { validators: [Validators.required], updateOn: 'blur', nonNullable: true } as FormControlOptions ],
    name: ['', { validators: [Validators.required], updateOn: 'blur' } ],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
  });
}
