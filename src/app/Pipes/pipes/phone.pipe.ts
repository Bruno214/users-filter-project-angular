import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Remover todos os caracteres não numéricos
    const cleaned = value.replace(/\D/g, '');

    // Definir a expressão regular para capturar os grupos de dígitos
    const phoneRegex = /^(\d{2})(\d{5})(\d{4})$/;
    const match = cleaned.match(phoneRegex);

    if (match) {
      // Retornar o número formatado
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    // Retornar a entrada original se não corresponder ao padrão esperado
    return value;
  }
}

