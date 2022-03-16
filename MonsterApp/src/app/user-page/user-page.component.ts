import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  users: any;
  resources: any;

  constructor(private dataUsers: UsersServiceService, private dataResources: UsersServiceService) {}

  ngOnInit(): void {
    this.dataUsers.getUsers().subscribe((data) => {this.users = data});
    this.dataResources.getResources().subscribe((data) => {this.resources = data});
  }
}
