import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizePropKey',
})
export class HumanizePropKeyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // 1. Insere o espaço antes das maiúsculas
    const spaced = value.replace(/([A-Z])/g, ' $1');

    // 2. Transforma a primeira letra de toda a string em maiúscula
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);

  }

}
