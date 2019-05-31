import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  //Pass in name of form in users.component.html
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

   }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   //unshift pushes to beginning of array --> push pushes to end
  //   this.users.unshift(this.user);
  //
  //   //To clear form after submit
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

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

  toggleHide(user: User) {
    user.hide = !user.hide
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not valid')
    }
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);

      this.form.reset();
    }
  }

}
