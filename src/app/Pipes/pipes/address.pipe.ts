import { Pipe, PipeTransform } from '@angular/core';
import { IAdress } from '../../interfaces/user/adress.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAdress): string {

    const  INVALID_ADRESS = !address || !address.rua || address.numero < 0 || address.numero === null || address.numero === undefined || !address.cidade || !address.estado;

    if (INVALID_ADRESS) {
      return "Endereço indisponível ou inválido"
    }

    return`${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }

}
