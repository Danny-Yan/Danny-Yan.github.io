import { Component, HostListener, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import { MiniCardComponent } from '../../ui/mini-card/mini-card.component';
import { MiniProjectRedirectComponent } from '../../ui/mini-project-redirect/mini-project-redirect.component';

@Component({
  selector: 'app-front-page-slides',
  imports: [FontAwesomeModule, MiniCardComponent, MiniProjectRedirectComponent],
  templateUrl: './front-page-slides.component.html',
  styleUrl: './front-page-slides.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrontPageSlidesComponent implements AfterViewInit{
    @ViewChild('swiperContainer') swiperContainer: any = new ElementRef(null);
    
    faAngleLeft = faAngleLeft
    faAngleRight = faAngleRight

    innerWidth: number = 0;
    slideNumber: number = 1;

    selectionSlidesArray = 
    [
        {
            title: "Fluid particle simulation",
            description: "A particle based fluid simulation that models how particles move in a container",
            icon: "/png/mini_view_cards/mini view particle.png",
            link: "/particle-simulation",
            languages: ["cpp"]
        },
        {
            title: "Desmos graphs",
            description: "A collection of desmos graphs which I have made over the years",
            icon: "/png/mini_view_cards/mini view desmos.png",
            link: "/desmos",
        },
        {
            title: "Voice recording discord bot",
            description: "A small discord bot which records and writes down any words spoken in a voice channel",
            icon: "/png/mini_view_cards/mini view discord.png",
            link: "/discord",
            languages: ["python", "js"]
        },
    ];

    ngAfterViewInit() {
        this.resize();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.resize();
    }

    resize(){
        this.innerWidth = window.innerWidth;

        // Calculate the number of slides that can fit in the viewport (Multiples of 1400px)
        this.slideNumber = Math.ceil(this.innerWidth / 1400);
    }
    
    scrollLeft(){
        this.swiperContainer.nativeElement.swiper.slidePrev();
    }

    scrollRight(){
        this.swiperContainer.nativeElement.swiper.slideNext();
    }
}
