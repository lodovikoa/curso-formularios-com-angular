import { signal, inject, effect, afterNextRender } from "@angular/core";
import { AbstractControl, ControlValueAccessor, NgControl } from "@angular/forms";

export class BaseField implements ControlValueAccessor {

  protected value = signal<string>('');
  protected isDisabled = signal(false);
  protected control = signal<AbstractControl | null>(null);

  protected changFn = (value: string) => { };
  protected touchFn = () => { };

  protected readonly ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    afterNextRender(() => {
      if (this.ngControl) {
         this.control.set(this.ngControl.control);
       }
    })

    effect(() => {
      this.changFn(this.value());
    });


  }

  writeValue(value: string): void {
    this.value.set(value);
  }
  registerOnChange(fn: any): void {
    this.changFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
