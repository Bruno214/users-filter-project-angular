import { Component } from '@angular/core';

@Component({
  selector: 'app-user-filtro',
  templateUrl: './user-filtro.component.html',
  styleUrl: './user-filtro.component.css'
})
export class UserFiltroComponent {
  statusList: any = [
    {value: 'statusOne', viewValue: 'Ativo'},
    {value: 'statusTwo', viewValue: 'Inativo'},
  ];
}
