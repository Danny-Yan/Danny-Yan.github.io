import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Location, NgIf, NgClass} from '@angular/common';
import { ThemeToggleComponent } from './components/ui/theme-toggle/theme-toggle.component';
import { SidebarMenuComponent } from './components/ui/sidebar-menu/sidebar-menu.component';
import { ThemeService } from './services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  imports: [ThemeToggleComponent, SidebarMenuComponent, RouterOutlet, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  __URL:string = "";
  showThemeToggle: boolean = false;
  isDarkMode: boolean = false;

  constructor(private location: Location, private themeService: ThemeService, private router: Router) {}

  ngOnInit(){    
    this.router.events.subscribe(event => {
        this.__URL = this.location.path();
        this.showThemeToggle = this.__URL.includes('/projects') || 
                                this.__URL.includes('/desmos') || 
                                this.__URL.includes('/discord');
    });

    this.themeService.modeChange.subscribe((darkmode) => {
      this.isDarkMode = darkmode;
    });
  }
}
