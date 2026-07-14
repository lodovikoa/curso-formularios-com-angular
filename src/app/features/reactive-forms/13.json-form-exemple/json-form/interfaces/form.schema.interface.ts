import { FieldType } from "../enums/field-type.enum";

export interface JsonFormSchema {
  submitLabel: string;
  fields: JsonFormFieldSchema[];
}

export interface JsonFormFieldSchema {
  name: string;
  label: string;
  placeholder?: string;
  initialValue: unknown;
  required: boolean;
  type: FieldType;
  options?: { value: unknown; label: string }[];
}
