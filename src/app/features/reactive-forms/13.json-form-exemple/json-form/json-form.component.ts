import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { JsonFormFieldSchema, JsonFormSchema } from './interfaces/form.schema.interface';
import { FormControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FieldType } from './enums/field-type.enum';
import { ErrorMessagesComponent } from "../../../../shared/error-messages/components/error-messages/error-messages.component";

const fieldTypeValidators = new Map<FieldType, ValidatorFn[]>([
  [FieldType.Email, [Validators.email]],
])

@Component({
  selector: 'app-json-form',
  imports: [FormsModule, ReactiveFormsModule, ErrorMessagesComponent],
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent {

  private readonly fb = inject(NonNullableFormBuilder);

  schema = input.required<JsonFormSchema>();
  protected fieldType = FieldType;
  protected fields = computed(() => this.schema().fields);
  protected submitLabel = computed(() => this.schema().submitLabel);

  protected formControls = computed(() => {
    return this.fields().reduce<Record<string, FormControl>>((controls, field) => {
      controls[field.name] = this.createFormControl(field);
      return controls;
    }, {});
  });

  protected form = computed(() => this.fb.record(this.formControls()));

  protected onSubmit() {

  }

  private createFormControl(field: JsonFormFieldSchema) {
    const control = this.fb.control(field.initialValue);

    if (field.required) { control.addValidators(Validators.required); }

    if (fieldTypeValidators.has(field.type)) {
      control.addValidators(fieldTypeValidators.get(field.type)!);
    }

    return control;
  }
}
