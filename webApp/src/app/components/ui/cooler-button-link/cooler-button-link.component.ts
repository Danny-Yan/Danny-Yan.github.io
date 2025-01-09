import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { faPlay, faCaretRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cooler-button-link',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './cooler-button-link.component.html',
  styleUrl: './cooler-button-link.component.css'
})
export class CoolerButtonLinkComponent {
    faPlay = faPlay
    faCaret = faCaretRight
    faAngle = faAngleRight

    @Input({required: true}) link: string = '';
}
