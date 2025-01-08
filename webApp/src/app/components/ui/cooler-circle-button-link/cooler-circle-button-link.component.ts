import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faPlay, faCaretRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cooler-circle-button-link',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './cooler-circle-button-link.component.html',
  styleUrl: './cooler-circle-button-link.component.css'
})
export class CoolerCircleButtonLinkComponent {
  faPlay = faPlay
  faCaret = faCaretRight
  faAngle = faAngleRight
}
