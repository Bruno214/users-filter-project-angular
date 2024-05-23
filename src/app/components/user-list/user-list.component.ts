import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { usersList } from '../../data/users-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date','status'];

  @Input({required:true, alias:'usersList'})
  dataSource: IUser[] = [];

  @Output() userClicked: EventEmitter<IUser> = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userClicked.emit(user);

  }
}
