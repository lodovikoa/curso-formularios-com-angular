import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

function createStorage(key: string) {
  return {
    get: () => JSON.parse(localStorage.getItem(key) ?? 'null'),
    set: (value: any) => localStorage.setItem(key, JSON.stringify(value))
  }
}

@Component({
  selector: 'app-form-group',
  imports: [ ReactiveFormsModule, JsonPipe, ErrorMessagesComponent ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent implements OnInit {

  draftStorage = createStorage('draft-form');

  protected form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required]}),
    email: new FormControl('', { validators: [Validators.required, Validators.email] })
  })

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log('valueChanges: ', value);

      this.draftStorage.set(value);
    })

    this.setDraftData();
  }

  protected setDraftData() {
    const draftData = this.draftStorage.get();

    if(draftData) {
      this.form.patchValue(draftData, {
        emitEvent: false
      });
    }

  }

  protected submit(event: Event) {
    console.log('Event:', event);
    console.log('Dados: ', this.form.value);

  }
}
