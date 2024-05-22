import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { usersList } from '../../data/users-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date','status'];
  dataSource: IUser[] = usersList;
  @Output() userClicked: EventEmitter<IUser> = new EventEmitter<IUser>();


  onUserSelected(linha: IUser) {
    console.log("clikado ",linha);
    this.userClicked.emit(linha);

  }
}
