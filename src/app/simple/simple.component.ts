import { FirstService } from './../services/first.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss',
})
export class SimpleComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(private service: FirstService) {
    this.messages = service.getAll();
    this.isSubmitted = this.messages.length > 0;
  }

  handleSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
