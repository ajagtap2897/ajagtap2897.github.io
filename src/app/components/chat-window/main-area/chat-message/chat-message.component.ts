import { Component, Input } from '@angular/core';
import { RESTService } from '../../../../app.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  @Input() user: User | undefined
  @Input() contact: User | undefined


  content: string = ''

  constructor(private httpService: RESTService) { }

  sendMsg = () => {
    if(this.content.length == 0 || !this.user || !this.contact){
      alert("Please enter a message")
    } else {
      let request = {
        'sender': this.user._id,
        'receiver': this.contact._id,
        'content': this.content
      }

      this.httpService.createData("messages", request).subscribe(data=>{
        this.content = ''
      })
    }
  }
}
