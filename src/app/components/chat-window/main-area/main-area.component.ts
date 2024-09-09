import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { Subscription } from 'rxjs';
import { RESTService } from '../../../app.service';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.model';
import { ChatHistoryComponent } from './chat-history/chat-history.component';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrl: './main-area.component.css'
})
export class MainAreaComponent {
  @Input() user: User | undefined = undefined;

  contact_id: string | undefined =  undefined;

  contact: User | undefined

  messageList: Message[] | undefined = []

  intervalId: any

  private messageSubscription: Subscription | undefined;

  constructor(private sharedService: SharedService, private httpService: RESTService) { }

  isScrolledToBottom = false;

  ngOnInit() {
    this.messageSubscription = this.sharedService.currentMessage.subscribe(id => {
      if (this.contact_id != id && id != "NULL" && id && this.user) {
        this.contact_id = id
        this.isScrolledToBottom = false
        this.getChatHistory(this.user, this.contact_id)
        clearInterval(this.intervalId)
        this.intervalId = setInterval(()=>this.getChatHistory(this.user, this.contact_id),1000)
      }
    })
  }

  getChatHistory = (user: User | undefined, contact_id: string | undefined) => {
    if(user != undefined && contact_id != null) {
      this.httpService.getData("chat-history/"+user._id+"/"+contact_id).subscribe(data=>{
        this.contact = data.contactUser
        this.messageList = data.messageList
        if (!this.isScrolledToBottom) this.scrollToBottom()
      })
    }
  }

  scrollToBottom = () => {
    let element = document.getElementById("chat-history")

    if (element) {
      element?.scroll({
        top: element.scrollHeight,
        behavior: 'smooth'
      })
      this.isScrolledToBottom = true
    }
  }

}
