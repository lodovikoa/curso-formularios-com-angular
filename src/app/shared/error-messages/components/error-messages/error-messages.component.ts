import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { filter } from 'rxjs';

const errorMessages: Record<string, (...args: any[]) => string> = {
  required: () => 'Campo obrigatório.',
  email: () => 'Por favor, insira um endereço de email válido.',
  passwordsAreNotEqual: ({ field1, field2 }) => `Os campos "${field1}" e "${field2}" devem ser iguais.`,
};

@Component({
  selector: 'app-error-messages',
  imports: [],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesComponent implements OnInit {

  control = input.required<AbstractControl>();
  currentErrorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.control()
      .events.pipe(filter(() => this.control().touched))
      .subscribe(() => {
        if (this.control().errors === null) {
          this.currentErrorMessage.set(null);
          return;
        }

        for (const key in this.control().errors) {
          const messageFn = errorMessages[key];
          const errorData = this.control().errors![key];


          if (messageFn) {
            this.currentErrorMessage.set(messageFn(errorData));
            break;
          }
        }
      });

  }
}
