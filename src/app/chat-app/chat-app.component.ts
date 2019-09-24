// import { ChatService } from './../services/chatservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as  io from 'socket.io-client';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {
  chatForm: FormGroup;
  socket: SocketIOClient.Socket;
  constructor(private fb: FormBuilder) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.chatForm = this.fb.group({
      message: ['', Validators.required]
    });
    this.socket.on('news', (data) => {
      console.log(data);

    })
  }

  onSubmit() {
    console.log(this.chatForm);

    if (this.chatForm.invalid) {
      return;
    }
    console.log('sent');
    this.socket.emit('send-message', this.chatForm.value);
  }
}
