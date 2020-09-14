import { Component, OnInit } from '@angular/core';
import { ChatMessageService } from '../chat-message.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  chatMessages = [];
  user: any;
  constructor(private chatMessageService: ChatMessageService,
  private userService: UserService) { }

  ngOnInit() {
    this.chatMessageService.Messages.subscribe(messages => {
      this.chatMessages = messages;
      console.log('message', messages); 
    }
    );
    this.userService.User.subscribe(user => this.user = user );
  }
}