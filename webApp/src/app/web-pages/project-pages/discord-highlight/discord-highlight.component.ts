import { Component, OnInit, HostListener } from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';
import { CoolerCircleButtonLinkComponent } from '../../../components/ui/cooler-circle-button-link/cooler-circle-button-link.component';
import { DiscordColumnComponent } from '../../../components/discord-components/discord-column/discord-column.component';

@Component({
  selector: 'app-discord-highlight',
  imports: [CoolerCircleButtonLinkComponent, DiscordColumnComponent],
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
