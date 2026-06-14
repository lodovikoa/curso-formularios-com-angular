import { inject, Injectable } from '@angular/core';
import { ERROR_MESSAGES } from '../components/error-messages/tokens/error-messages.token';
import { ValidationSuccess } from '@angular/forms/signals';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageResolverService {

    private readonly errorMessages = inject(ERROR_MESSAGES);

    get pendingMessage() {
      return this.errorMessages.pendingMessage;
    }

    getMessage(errors: ValidationErrors) {
      for (const key in errors) {
          const messageFn = this.errorMessages.errorMessages[key];

          if (messageFn) {
            const errorData = errors[key];
            return messageFn(errorData);
          }
        }

        return null;
    }

}
