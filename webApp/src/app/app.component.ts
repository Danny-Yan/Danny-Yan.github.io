import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Location, NgIf, NgClass} from '@angular/common';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [ThemeToggleComponent, SidebarMenuComponent, RouterOutlet, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  __URL:string = "";
  isDarkMode: boolean = false;

  constructor(private location: Location, private themeService: ThemeService, private router: Router) {}

  ngOnInit(){    
    this.router.events.subscribe(event => {
        this.__URL = this.location.path();
    });

    this.themeService.modeChange.subscribe((darkmode) => {
      this.isDarkMode = darkmode;
    });
  }
}
