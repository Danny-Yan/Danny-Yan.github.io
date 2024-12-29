import { Component } from '@angular/core';
import {NgClass} from "@angular/common"; 
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FontAwesomeModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faXmark = faXmark
  faSun = faSun
  faMoon = faMoon
  faBars = faBars
  side_bar_val = "w-0" 
  dark_mode_toggle = false

  showmenu(){
    this.side_bar_val = "w-40";
  }
  hidemenu(){
    this.side_bar_val = "w-0";
  }
  lightmode(){
    this.dark_mode_toggle = false
  }
  darkmode(){
    this.dark_mode_toggle = true
  }
}
