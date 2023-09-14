import { Component } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user?: User;

  constructor() {
  }

  ngOnInit() {

  }
}

