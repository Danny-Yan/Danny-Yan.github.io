import { NgClass} from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faCaretRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-simple-arrow-button',
  imports: [NgClass, FontAwesomeModule, RouterLink],
  templateUrl: './simple-arrow-button.component.html',
  styleUrl: './simple-arrow-button.component.css'
})
export class SimpleArrowButtonComponent {
    faPlay = faPlay;
    faCaretRight = faCaretRight;
    faAngle = faAngleRight;
    @Input() btn_class: string = '';
    @Input({required: true}) link: string = '';
    constructor() {}
}
