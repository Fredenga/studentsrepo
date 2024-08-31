import { Injectable } from '@angular/core';

type Message = { name: string; email: string; message: string };

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  messages: Array<Message> = [];

  constructor() {
    this.init();
  }

  init() {
    this.insert({
      name: 'fedtsenga',
      email: 'fedt@senga',
      message: 'welcome to the party',
    });
    this.insert({
      name: 'feddoe',
      email: 'fedt@doe',
      message: 'welcome to the city',
    });
    this.insert({
      name: 'feddit',
      email: 'fedt@dit',
      message: 'welcome to the cinema',
    });
  }

  insert(message: Message): void {
    this.messages.push(message);
  }

  getAll() {
    return this.messages;
  }
  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
