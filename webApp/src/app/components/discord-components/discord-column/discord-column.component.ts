import { Component, Input, HostListener, OnInit } from '@angular/core';
import { DiscordMessageComponent } from '../discord-message/discord-message.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-discord-column',
  imports: [DiscordMessageComponent, NgStyle],
  templateUrl: './discord-column.component.html',
  styleUrl: './discord-column.component.css'
})
export class DiscordColumnComponent implements OnInit {
  @Input() scale: number = 1;
  @Input({ required: true }) messages: any[] = [];
  @Input() col_num: number = 1;
  col_amount: number[] = [];

  sect_num: number = 3;
  section_amount: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.col_amount = Array(this.col_num).fill(0).map((x,i)=>i);
    this.section_amount = Array(this.sect_num).fill(0).map((x,i)=>i);
  }
}
