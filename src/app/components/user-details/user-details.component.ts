import { IUser } from './../../interfaces/user/user.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input({required:true}) userDetailsSelected: IUser = {} as IUser;
}
