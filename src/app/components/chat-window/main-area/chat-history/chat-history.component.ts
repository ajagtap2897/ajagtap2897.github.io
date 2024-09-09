import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../../../models/message.model';
import { User } from '../../../models/user.model';
import { MatCardContent } from '@angular/material/card';
import { getProfilePicUrl } from '../../../../shared/utilities';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  @Input() user: User | undefined
  @Input() messageList: Message[] | undefined

  profilePicUrl = "http://localhost:8000/static/images/"

  getProfilePicURL = (user: User | undefined) => {
    return getProfilePicUrl(user?.profile_pic)
  }

}
