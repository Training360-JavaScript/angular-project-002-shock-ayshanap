import { UserService } from 'src/app/service/user.service';
import { Component, Input } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  users : User[] = [];
  currentUser: User = new User();

  constructor(private userService: UserService) {
    this.users = userService.list;
    this.userService = userService;
  }

  selectUser(user: User) : void {
    this.currentUser = user;
  }

  updateUser(user: User) : void {
    this.userService.updateUser(user);
  }

  deleteUser(user: User) : void {
    this.userService.removeUser(user);
  }

}
