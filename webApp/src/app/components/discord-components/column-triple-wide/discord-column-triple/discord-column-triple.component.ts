import { Component, Input } from '@angular/core';
import { DiscordMessageTripleComponent } from '../discord-message-triple/discord-message-triple.component';

@Component({
  selector: 'app-discord-column-triple',
  imports: [DiscordMessageTripleComponent],
  templateUrl: './discord-column-triple.component.html',
  styleUrl: './discord-column-triple.component.css'
})
export class DiscordColumnTripleComponent {
  @Input({ required: true }) messages: any[] = [];
  col_num: number = 3;
  col_amount: number[];

  sect_num: number = 3;
  section_amount: number[];
  constructor() {
    this.col_amount = Array(this.col_num).fill(0).map((x,i)=>i);
    this.section_amount = Array(this.sect_num).fill(0).map((x,i)=>i);
  }
}
