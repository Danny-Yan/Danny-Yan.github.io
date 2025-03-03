import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discord-message',
  imports: [NgStyle],
  templateUrl: './discord-message.component.html',
  styleUrl: './discord-message.component.css'
})
export class DiscordMessageComponent {
      @Input() scale: number = 1;
      @Input() col_num: number = 1;
      @Input({ required: true }) time: any;
      @Input({ required: true }) name: string = '';
      @Input({ required: true }) text: string = '';
      @Input({ required: true }) icon: any;
}
