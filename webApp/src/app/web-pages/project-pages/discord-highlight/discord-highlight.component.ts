import { Component, OnInit, HostListener } from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';
import { ButtonLinkComponent } from '../../../components/ui/button-link/button-link.component';
import { DiscordColumnTripleComponent } from "../../../components/discord-components/column-triple-wide/discord-column-triple/discord-column-triple.component";
import { DiscordColumnSingleComponent } from '../../../components/discord-components/column-single-wide/discord-column-single/discord-column-single.component';
import { CoolerCircleButtonLinkComponent } from '../../../components/ui/cooler-circle-button-link/cooler-circle-button-link.component';

@Component({
  selector: 'app-discord-highlight',
  imports: [DiscordColumnTripleComponent, DiscordColumnSingleComponent, CoolerCircleButtonLinkComponent],
  templateUrl: './discord-highlight.component.html',
  styleUrl: './discord-highlight.component.css'
})
export class DiscordHighlightComponent implements OnInit {
  messages: Array<any> = [];
  innerWidth: number = 0;

  constructor( private appSettingsService: AppSettingsService) {}

  ngOnInit(){
    this.appSettingsService.getJSON("test_json.html").subscribe(data => {
      this.messages = data;
    });
    this.innerWidth = window.innerWidth;
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
