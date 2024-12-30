import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';

@Component({
  selector: 'app-discord-highlight',
  imports: [NgFor, NgIf],
  templateUrl: './discord-highlight.component.html',
  styleUrl: './discord-highlight.component.css'
})
export class DiscordHighlightComponent implements OnInit {
  constructor( private appSettingsService: AppSettingsService) {}

  ngOnInit(){
    this.appSettingsService.getJSON().subscribe(data => {
      console.log(data);
    });
  };
}
