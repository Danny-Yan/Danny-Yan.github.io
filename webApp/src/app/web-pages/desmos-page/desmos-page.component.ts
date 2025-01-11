import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { DesmosDisplayVersion2Component } from '../../components/desmos-components/desmos-display-version-2/desmos-display-version-2.component';

@Component({
  selector: 'app-desmos-page',
  imports: [DesmosDisplayVersion2Component],
  templateUrl: './desmos-page.component.html',
  styleUrl: './desmos-page.component.css'
})
export class DesmosPageComponent implements OnInit {
  desmos_dict: Array<any> = [];
  
  constructor( private appSettingsService: AppSettingsService) {}

  ngOnInit(){
    this.appSettingsService.getJSON("desmos_pages.html").subscribe(data => {
      this.desmos_dict = data;
    });
  };


  // Add replay feature for svg animations
}