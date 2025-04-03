import { NgClass} from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faCaretRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-circle-button-link',
  imports: [FontAwesomeModule, NgClass, RouterLink],
  templateUrl: './circle-button-link.component.html',
  styleUrl: './circle-button-link.component.css'
})
export class CircleButtonLinkComponent {
    faPlay = faPlay;
    faCaretRight = faCaretRight;
    faAngle = faAngleRight;
    @Input() btn_class: string = '';
    @Input({required: true}) link: string = '';
    constructor() {}
}
