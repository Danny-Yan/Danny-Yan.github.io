import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import { RouterLink } from '@angular/router';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar-menu',
  imports: [NgClass, FontAwesomeModule, RouterLink],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  faXmark = faXmark
  faBars = faBars
  side_bar_val = "w-0" 

  showmenu(){
    this.side_bar_val = "w-40";
  }
  hidemenu(){
    this.side_bar_val = "w-0";
  }


  // NOT IMPLEMENTED
  scroll(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }
}
