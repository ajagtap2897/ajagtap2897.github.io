import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private messageSource = new BehaviorSubject<string>("NULL"); // Default value
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // Method to update the message
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
