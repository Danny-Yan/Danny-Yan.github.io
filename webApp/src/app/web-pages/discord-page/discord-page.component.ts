import { Component, OnInit, HostListener } from '@angular/core';
import { DiscordColumnSingleComponent } from '../../components/discord-components/column-single-wide/discord-column-single/discord-column-single.component';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { DiscordColumnTripleComponent } from '../../components/discord-components/column-triple-wide/discord-column-triple/discord-column-triple.component';

@Component({
  selector: 'app-discord-page',
  imports: [DiscordColumnSingleComponent, DiscordColumnTripleComponent],
  templateUrl: './discord-page.component.html',
  styleUrl: './discord-page.component.css'
})
export class DiscordPageComponent implements OnInit{
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
