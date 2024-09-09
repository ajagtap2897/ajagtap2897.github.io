import { Component, Input, OnInit } from '@angular/core';
import { RESTService } from '../../../../app.service';
import { Chat } from '../../../models/chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent implements OnInit {
    @Input() user_id: string | undefined;

    chats:Chat[] = []

    constructor(private httpService: RESTService) {}

    ngOnInit(): void {
      this.getChats()
      setInterval(()=> this.getChats(), 5000)
    }

    getChats = () => {
      this.httpService.getData("chat-list/"+this.user_id).subscribe(
        data => {
          this.chats = data;
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    }
}
