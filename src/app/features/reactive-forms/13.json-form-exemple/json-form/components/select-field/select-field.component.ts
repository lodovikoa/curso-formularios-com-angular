import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ErrorMessagesComponent } from "../../../../../../shared/error-messages/components/error-messages/error-messages.component";
import { JsonFormFieldSchema } from '../../interfaces/form.schema.interface';
import { BaseField } from '../shared/base-field/base-field';

@Component({
  selector: 'app-select-field',
  imports: [FormsModule, ErrorMessagesComponent],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFieldComponent extends BaseField{

  label = input.required<string>();
  placeholder = input<string>();
  options = input.required<JsonFormFieldSchema['options']>();

}
