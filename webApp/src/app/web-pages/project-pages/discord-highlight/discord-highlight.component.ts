import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';
import { ButtonLinkComponent } from '../../../components/button-link/button-link.component';
import { DiscordColumnTripleComponent } from "../../../components/discord-components/column-triple-wide/discord-column-triple/discord-column-triple.component";

@Component({
  selector: 'app-discord-highlight',
  imports: [ButtonLinkComponent, DiscordColumnTripleComponent],
  templateUrl: './discord-highlight.component.html',
  styleUrl: './discord-highlight.component.css'
})
export class DiscordHighlightComponent implements OnInit {
  messages: Array<any> = [];

  constructor( private appSettingsService: AppSettingsService) {}

  ngOnInit(){
    this.appSettingsService.getJSON("test_json.html").subscribe(data => {
      this.messages = data;
    });
  };
}
