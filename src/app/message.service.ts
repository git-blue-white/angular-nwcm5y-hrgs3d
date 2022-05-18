import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string[] = [];
  add(message1: string) {
    this.message.push(message1);
  }
  clear() {
    this.message = [];
  }

  constructor() {}
}
