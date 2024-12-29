import { Component } from '@angular/core';
import {NgClass} from "@angular/common"; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  faSun = faSun;
  faMoon = faMoon;
  dark_mode_toggle = false;
  isDarkMode: boolean;

  constructor( private themeService: ThemeService){
    this.isDarkMode = this.themeService.isDarkMode();
  }

  lightmode(){
    this.dark_mode_toggle = false
    this.themeService.setDarkMode(this.isDarkMode);
  }
  darkmode(){
    this.dark_mode_toggle = true
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
