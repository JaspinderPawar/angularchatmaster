import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:3000';  
  private socket;
  
  sendMessage(message,image){
    this.socket.emit('sendchat', message,image);    
  }

   JoinChat(username,room){    
     if(username){
    this.socket.emit('adduser', username,room);   
    } 
  }

  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('messages', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

 

  getuserList() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('getusers', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}