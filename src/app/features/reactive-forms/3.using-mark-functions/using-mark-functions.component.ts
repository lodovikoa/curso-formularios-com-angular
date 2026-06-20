import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-using-mark-functions',
  imports: [ ReactiveFormsModule ],
  templateUrl: './using-mark-functions.component.html',
  styleUrl: './using-mark-functions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsingMarkFunctionsComponent {

  protected nameControl = new FormControl();

  protected markAsTouched() {
    this.nameControl.markAsTouched();
  }

  protected markAsUntouched() {
    this.nameControl.markAsUntouched();
  }

  protected markAsDirty() {
    this.nameControl.markAsDirty();
  }

  protected markAsPristine() {
    this.nameControl.markAsPristine();
  }

  protected markAsPending() {
    this.nameControl.markAsPending();
  }
}
