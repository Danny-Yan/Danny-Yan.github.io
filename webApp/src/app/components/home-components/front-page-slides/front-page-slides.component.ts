import { Component, HostListener, ViewChild, ElementRef, OnInit, Renderer2, AfterViewInit} from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import { MiniCardComponent } from '../../ui/mini-card/mini-card.component';
import { MiniProjectRedirectComponent } from '../../ui/mini-project-redirect/mini-project-redirect.component';

@Component({
  selector: 'app-front-page-slides',
  imports: [FontAwesomeModule, MiniCardComponent, MiniProjectRedirectComponent],
  templateUrl: './front-page-slides.component.html',
  styleUrl: './front-page-slides.component.css'
})
export class FrontPageSlidesComponent implements AfterViewInit {
    @ViewChild('slides') slides: ElementRef = new ElementRef(null);
    @ViewChild('mini_box_ref') miniBoxRef: ElementRef = new ElementRef(null);
    
    faAngleLeft = faAngleLeft
    faAngleRight = faAngleRight

    innerWidth: number = 0;
    scrollAmount: number = 500;

    selectionSlidesArray = 
    [
        {
            title: "Desmos graphs",
            description: "A collection of desmos graphs which I have made over the years",
            icon: "/png/mini_view_cards/mini view desmos.png",
            link: "/desmos"
        },
        {
            title: "Voice recording discord bot",
            description: "A small discord bot which records and writes down any words spoken in a voice channel",
            icon: "/png/mini_view_cards/mini view discord.png",
            link: "/discord"
        }
    ];

    constructor( private appSettingsService: AppSettingsService, private render: Renderer2) {}

    ngAfterViewInit(){
        console.log(this.slides.nativeElement)
        console.log(this.slides.nativeElement.scrollLeft)
        this.scrollAmount = this.miniBoxRef.nativeElement.getBoundingClientRect().x
        this.innerWidth = window.innerWidth;
    };

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.innerWidth = window.innerWidth;
    }
    
    scrollLeft(){
        console.log(this.slides.nativeElement.scrollLeft - this.scrollAmount);
        // console.log(this.slides.nativeElement.scrollLeft);
        this.slides.nativeElement.scrollTo({ left: (this.slides.nativeElement.scrollLeft - this.scrollAmount), behavior: 'smooth' });
        // this.slides.nativeElement.scrollLeft -= this.scrollAmount;
    }

    scrollRight(){
        console.log(this.slides.nativeElement.scrollLeft);
        // console.log(this.slides.nativeElement.scrollLeft);
        this.slides.nativeElement.scrollTo({ left: (this.slides.nativeElement.scrollLeft + this.scrollAmount), behavior: 'smooth' });
    }
}
