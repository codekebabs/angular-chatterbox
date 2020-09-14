import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatMessageService } from '../chat-message.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat-text-box',
  templateUrl: './chat-text-box.component.html',
  styleUrls: ['./chat-text-box.component.css']
})
export class ChatTextBoxComponent implements OnInit {
  messageForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });
  user: any;
  constructor(private chatMessageService: ChatMessageService, private userService: UserService) { }

  ngOnInit() {
    this.userService.User.subscribe(user => this.user = user );
  }

  onSubmit() {
    console.warn('got it', this.messageForm.value, this.user);
    const chatMessage = {
      username: this.user.username,
      message: this.messageForm.get('message').value
    }
    this.chatMessageService.postMessage(chatMessage);
    this.messageForm.setValue({
      message: ''
    })
  }

}