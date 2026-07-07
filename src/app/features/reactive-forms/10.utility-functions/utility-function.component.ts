import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormRecord, isFormArray, isFormControl, isFormGroup, isFormRecord } from '@angular/forms';

@Component({
  selector: 'app-utility-function',
  imports: [ JsonPipe ],
  templateUrl: './utility-function.component.html',
  styleUrl: './utility-function.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilityFunctionComponent {

  protected currentControl = signal<AbstractControl | null>(null);
  protected verification = computed(() => {
    return {
      isFormControl: isFormControl(this.currentControl()),
      isFormGroup: isFormGroup(this.currentControl()),
      isFormRecord: isFormRecord(this.currentControl()),
      isFormArray: isFormArray(this.currentControl()),
    }
  });

  protected createFormControl() {
    this.currentControl.set(new FormControl());
  }

  protected createFormGroup() {
    this.currentControl.set(new FormGroup({}));
  }

  protected createFormRecord() {
    this.currentControl.set(new FormRecord({}));
  }

  protected createFormArray() {
    this.currentControl.set(new FormArray([]));
  }


}
