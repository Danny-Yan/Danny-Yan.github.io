import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discord-message',
  imports: [],
  templateUrl: './discord-message.component.html',
  styleUrl: './discord-message.component.css'
})
export class DiscordMessageComponent {
    @Input({ required: true }) time: any;
    @Input({ required: true }) name: any;
    @Input({ required: true }) text: any;
    @Input({ required: true }) icon: any;
}
