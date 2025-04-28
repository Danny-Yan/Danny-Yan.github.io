import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import {NgClass} from "@angular/common";
import { RouterLink } from '@angular/router';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-sidebar-menu',
  imports: [NgClass, FontAwesomeModule, SidebarLinkComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
    faXmark = faXmark
    faBars = faBars
    side_bar_val = "left-[-100%]" 
    @ViewChild('menuSidebarIcon') menuIcon: ElementRef = new ElementRef(null);
    @ViewChild('sidebar') sidebar: ElementRef = new ElementRef(null);

    public show: boolean = false;

    @HostListener('document:click',['$event']) 
    public documentClick(event: Event): void {         
        if (!this.sidebar.nativeElement.contains(event.target) && 
            !this.menuIcon.nativeElement.contains(event.target)) {
            this.hidemenu();
        }
    }

    showmenu(){
        this.side_bar_val = "left-0";
    }
    hidemenu(){
        this.side_bar_val = "left-[-100%]";
    }
}
