import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { getProfilePicUrl } from '../../../../shared/utilities';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {
  @Input() user: User | undefined

  getProfilePicURL = (profile_pic: string) => {
    return getProfilePicUrl(profile_pic)
  }

}
