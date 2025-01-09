import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faPlay, faCaretRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cooler-circle-button-link',
  imports: [FontAwesomeModule, RouterLink, NgClass],
  templateUrl: './cooler-circle-button-link.component.html',
  styleUrl: './cooler-circle-button-link.component.css'
})
export class CoolerCircleButtonLinkComponent implements AfterViewInit{
  faPlay = faPlay
  faCaret = faCaretRight
  faAngle = faAngleRight
  @Input({ required: true}) link: string = '';
  @Input() btn_class: string = '';
  @ViewChild('blur_background') background: ElementRef = ElementRef.prototype;

  ngAfterViewInit(): void {
    console.log(this.background.nativeElement);
  }

  
  mouseEnter(){
    console.log('Mouse Enter')
    console.log(this.background);
    this.background.nativeElement.style.opacity = 1;
  }

  mouseLeave(){
      console.log('Mouse Leave');
      this.background.nativeElement.style.opacity = 0;
  }
}
