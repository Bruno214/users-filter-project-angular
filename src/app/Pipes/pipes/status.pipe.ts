import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../../interfaces/user/status.interface';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const STATUS_VALID = status === null || status === undefined;

    if (STATUS_VALID) {
      return "Status indisponível ou inválido";
    }

    return status ? "Ativo": "Inativo";
  }
}
