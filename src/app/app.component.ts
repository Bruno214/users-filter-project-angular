import { Component, Input, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { usersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  user: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersListApp: IUser[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.usersListApp = usersList;
    }, 3000)
  }

  onUserClicked(userSelected: IUser) {
   this.user = userSelected;
   this.showUserDetails = true;
  }
}
