import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from "../../../../../../shared/error-messages/components/error-messages/error-messages.component";
import { BaseField } from '../shared/base-field/base-field';

export type InputFieldType = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input-field',
  imports: [FormsModule, ErrorMessagesComponent],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputFieldComponent extends BaseField {

  label = input.required<string>();
  placeholder = input<string>();
  type = input.required<InputFieldType>();


}
