import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  basePath = 'http://localhost:3000';
  private socket;
  constructor() {
    this.socket = io(this.basePath);
  }
  sendMessage(data) {
    // this.socket.emit('send-message', data);
  }
}
