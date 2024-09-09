import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { RESTService } from '../../app.service';
import { DataService } from '../../services/data.service';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../services/auth.service';
import { getProfilePicUrl } from '../../shared/utilities';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  user: User | undefined = undefined
  contactList: User[] = []

  constructor(private httpService: RESTService, private dataService: DataService, private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit() {

    this.user = this.dataService.getUser()

    this.httpService.getData("users").subscribe(data=>{
      data.forEach((element: any) => {
        let contact: User = {
          _id: element['id'],
          name: element['name'],
          email: element['email'],
          profile_pic: element['profile_pic']
        }
        if (this.user?._id != contact._id) {
          this.contactList.push(contact)
        }
      });
    })
  }

  getProfilePicURL = (profile_pic: string) => {
    return getProfilePicUrl(profile_pic)
  }

  openNewChat = (contact_id: string) => {
    this.sharedService.changeMessage(contact_id)
  }

  logout = () => {
    this.authService.logout()
  }
}
