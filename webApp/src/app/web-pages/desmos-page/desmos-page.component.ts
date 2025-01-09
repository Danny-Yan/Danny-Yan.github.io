import { Component, OnInit } from '@angular/core';
import { DesmosDisplayVersion1Component } from '../../components/desmos-components/desmos-display-version-1/desmos-display-version-1.component';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Component({
  selector: 'app-desmos-page',
  imports: [DesmosDisplayVersion1Component],
  templateUrl: './desmos-page.component.html',
  styleUrl: './desmos-page.component.css'
})
export class DesmosPageComponent implements OnInit {
  desmos_dict: Array<any> = [];
  
  constructor( private appSettingsService: AppSettingsService) {}

  ngOnInit(){
    this.appSettingsService.getJSON("desmos_pages.html").subscribe(data => {
      console.log(data);
      this.desmos_dict = data;
    });
  };

}