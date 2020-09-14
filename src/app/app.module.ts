import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatTextBoxComponent } from './chat-text-box/chat-text-box.component';
import { ChatMessageService } from './chat-message.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ChatWindowComponent, ChatMessageComponent, ChatTextBoxComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChatMessageService, UserService]
})
export class AppModule { }
