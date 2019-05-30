import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School St',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/03/2016 03:20:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 24,
          address: {
            street: '55 Mill St',
            city: 'Miami',
            state: 'FL'
          },
          isActive: true,
          registered: new Date('06/06/2001 12:30:00')
        }

      ];

    this.loaded = true;

    // this.setCurrentClasses();
    // this.setCurrentStyles();
   }

  addUser(user:User) {
    this.users.push(user);
  }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }
  //
  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px'
  //   }
  // }


}
