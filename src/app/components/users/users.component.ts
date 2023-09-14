import { Component, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[] = [];
  @ViewChild('userForm') myForm: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  toggleCard(index: number) {
    this.users[index].hide = !this.users[index].hide;
  }

  pass(el: any) {
    console.log(el);
  }

  onSubmit(f: any) {
    this.userService.addUser(this.user)
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.myForm.form.markAsPristine();
    this.myForm.form.markAsUntouched();
    this.myForm.form.updateValueAndValidity();
  }

}
