import { Component, HostListener, ViewChild, ElementRef, OnInit} from '@angular/core';
import { DesmosHighlightComponent } from '../../../web-pages/project-pages/desmos-highlight/desmos-highlight.component';
import { DiscordHighlightComponent } from '../../../web-pages/project-pages/discord-highlight/discord-highlight.component';
import { DiscordColumnComponent } from '../../discord-components/discord-column/discord-column.component';
import { AppSettingsService } from '../../../services/app-settings/app-settings.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-front-page-slides',
  imports: [DesmosHighlightComponent, DiscordHighlightComponent, DiscordColumnComponent, FontAwesomeModule],
  templateUrl: './front-page-slides.component.html',
  styleUrl: './front-page-slides.component.css'
})
export class FrontPageSlidesComponent implements OnInit {
    @ViewChild('slides') slides: ElementRef = new ElementRef(null);
    
    faAngleLeft = faAngleLeft
    faAngleRight = faAngleRight

    messages: Array<any> = [];
    innerWidth: number = 0;
    scrollAmount: number = 500;

    selectionSlidesArray = ["discord", "desmos", "UI"];

    constructor( private appSettingsService: AppSettingsService) {}

    ngOnInit(){
        this.appSettingsService.getJSON("test_json.html").subscribe(data => {
        this.messages = data;
        });
        this.innerWidth = window.innerWidth;
        console.log(this.slides.nativeElement);
    };

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.innerWidth = window.innerWidth;
    }
    
    scrollLeft(){
        console.log(this.slides.nativeElement.scrollLeft - this.scrollAmount);
        // console.log(this.slides.nativeElement.scrollLeft);
        this.slides.nativeElement.scrollTo({ left: (this.slides.nativeElement.scrollLeft - this.scrollAmount), behavior: 'smooth' });
    }

    scrollRight(){
        // console.log(this.slides.nativeElement.scrollLeft);
        this.slides.nativeElement.scrollTo({ left: (this.slides.nativeElement.scrollLeft + this.scrollAmount), behavior: 'smooth' });
    }
}
