import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private user = new BehaviorSubject(null);
  User = this.user.asObservable();
  constructor() { }

  login(user: any) {
    this.user.next(user);
  }
}