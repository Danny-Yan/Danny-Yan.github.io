import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';
import { DiscordMessageComponent } from '../../../components/discord-message/discord-message.component';
import { ButtonLinkComponent } from '../../../components/button-link/button-link.component';

@Component({
  selector: 'app-discord-highlight',
  imports: [ DiscordMessageComponent, ButtonLinkComponent],
  templateUrl: './discord-highlight.component.html',
  styleUrl: './discord-highlight.component.css'
})
export class DiscordHighlightComponent implements OnInit {
  messages: any;
  message_len: number = 3;
  numbers: number[];
  constructor( private appSettingsService: AppSettingsService) {
    this.numbers = Array(this.message_len).fill(0).map((x,i)=>i);
  }

  ngOnInit(){
    this.appSettingsService.getJSON("test_json.html").subscribe(data => {
      console.log(data);
      this.messages = data;
    });
  };
}
