import { Component, Input } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userApp: IUser = {} as IUser;

  onUserClicked(userSelected: IUser) {
   console.log("estou no componente pai appComponente", userSelected)
   this.userApp = userSelected;
  }

}
