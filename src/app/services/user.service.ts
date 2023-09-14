import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        age: 30,
        address: {
          street: '50 Main Street',
          city: 'Boston',
          state: 'MA'
        },
        isActive: false,
        hide: true
      },
      {
        firstName: 'Steven',
        lastName: 'Miller',
        email: 'john@example.com',
        age: 42,
        address: {
          street: '150 Elm Street',
          city: 'San Diego',
          state: 'CA'
        },
        isActive: true,
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.unshift({ ...user, hide: true })
  }

}
