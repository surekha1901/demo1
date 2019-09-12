import { Component, OnInit } from '@angular/core';
import { UsersServic} from '../users-service';
import { from } from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersServic) { }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onsetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
