import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ChatMessageService {
  private messages = new BehaviorSubject([]);
  Messages = this.messages.asObservable();
  constructor() { }

  postMessage(message: {}) {
    const all = [...this.messages.value];
    all.push(message);
    console.log(all);
    this.messages.next(all);
  }
}