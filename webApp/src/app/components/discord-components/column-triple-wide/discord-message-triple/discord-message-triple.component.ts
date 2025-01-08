import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discord-message-triple',
  imports: [],
  templateUrl: './discord-message-triple.component.html',
  styleUrl: './discord-message-triple.component.css'
})
export class DiscordMessageTripleComponent {
    @Input({ required: true }) time: any;
    @Input({ required: true }) name: string = '';
    @Input({ required: true }) text: string = '';
    @Input({ required: true }) icon: any;
}
