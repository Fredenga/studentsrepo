import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input() message: any = {};
  @Input() index: number = 0;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  handleDelete() {
    this.delete.emit(this.index);
  }
}
