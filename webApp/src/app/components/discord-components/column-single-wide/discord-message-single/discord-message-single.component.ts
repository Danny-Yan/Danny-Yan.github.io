import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discord-message-single',
  imports: [],
  templateUrl: './discord-message-single.component.html',
  styleUrl: './discord-message-single.component.css'
})
export class DiscordMessageSingleComponent {
    @Input({ required: true }) time: string = '';
    @Input({ required: true }) name: string = '';
    @Input({ required: true }) text: string = '';
    @Input({ required: true }) icon: any;
}
