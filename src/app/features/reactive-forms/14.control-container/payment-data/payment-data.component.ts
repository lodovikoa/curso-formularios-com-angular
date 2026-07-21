import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-data',
  imports: [ ReactiveFormsModule ],
  templateUrl: './payment-data.component.html',
  styleUrl: './payment-data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDataComponent implements OnInit {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly controlConteiner = inject(ControlContainer);

  protected form = this.fb.group({
    crediCard: '',
    expiry: '',
    cvv: ''
  })

  ngOnInit(): void {
    (this.controlConteiner.control as FormGroup).addControl('payment', this.form);
  }
}
