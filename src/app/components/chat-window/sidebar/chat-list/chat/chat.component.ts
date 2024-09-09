import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chat } from '../../../../models/chat.model';
import { SharedService } from '../../../../../services/shared.service';
import { getProfilePicUrl } from '../../../../../shared/utilities';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Input()
  chat!: Chat;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private sharedService: SharedService) {}


  getStrippedText = (text: string) => {
    return  text.substring(0, 30) + "..."
  }

  getProfilePicURL = (profile_pic: string) => {
    return getProfilePicUrl(profile_pic)
  }

  openChat = () => {
    this.sharedService.changeMessage(this.chat.user._id)
  }
}
