import { Component, Input } from '@angular/core';
import { DiscordMessageSingleComponent } from '../discord-message-single/discord-message-single.component';

@Component({
  selector: 'app-discord-column-single',
  imports: [DiscordMessageSingleComponent],
  templateUrl: './discord-column-single.component.html',
  styleUrl: './discord-column-single.component.css'
})
export class DiscordColumnSingleComponent {
  @Input({ required: true }) messages: any[] = [];
  col_num: number = 1;
  col_amount: number[];

  sect_num: number = 3;
  section_amount: number[];
  constructor() {
    this.col_amount = Array(this.col_num).fill(0).map((x,i)=>i);
    this.section_amount = Array(this.sect_num).fill(0).map((x,i)=>i);
  }
}
