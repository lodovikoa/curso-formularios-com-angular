import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { fullNameValidator } from '../1.form-control/validators/full-name.validator';
import { maxNamesValidator } from '../1.form-control/validators/max-names.validator';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

@Component({
  selector: 'app-validations',
  imports: [ReactiveFormsModule, FormsModule, ErrorMessagesComponent],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationsComponent {

  protected sincValidationsKeys = computed(() => this.syncValidations().map((item) => item.name));
  protected selectedSyncValidations = signal<string[]>([]);
  protected name = new FormControl('');

  protected addSyncValidators() {
    const fns = this.selectedAsyncValidationsFn();
    this.name.addValidators(fns);
    this.selectedSyncValidations.set([]);
  }

  protected setSyncValidators() {
    const fns = this.selectedAsyncValidationsFn();
    this.name.setValidators(fns);
    this.selectedSyncValidations.set([]);
  }

  protected removeSyncValidators() {
    const fns = this.selectedAsyncValidationsFn();
    this.name.removeValidators(fns);
    this.selectedSyncValidations.set([]);
  }

  protected clearSyncValidators() {
    this.name.clearValidators();
  }

  protected updateValueAndValidity() {
    this.name.updateValueAndValidity();
  }

  private readonly syncValidations = signal([
    { name: 'required', validation: Validators.required },
    { name: 'minLength', validation: Validators.minLength(3) },
    { name: 'fullName', validation: fullNameValidator },
    { name: 'maxNames', validation: maxNamesValidator(2) },
  ]);

  private readonly selectedAsyncValidationsFn = computed(() => {
    return this.syncValidations()
      .filter((item) => this.selectedSyncValidations().includes(item.name))
      .map((item) => item.validation)
  });
}
