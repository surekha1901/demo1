import { Component, OnInit } from '@angular/core';
import { UsersServic } from '../users-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string [ ];

  constructor(private userService: UsersServic) { }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
onSetActive(id: number) {
  this.userService.setToActive(id);

}
}
