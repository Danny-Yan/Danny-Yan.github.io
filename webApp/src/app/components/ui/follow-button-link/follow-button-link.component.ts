import { Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-follow-button-link',
  imports: [],
  templateUrl: './follow-button-link.component.html',
  styleUrl: './follow-button-link.component.css'
})
export class FollowButtonLinkComponent {
    @Input() text: string = 'Follow';

    
  @HostListener('mousemove', ['$event'])
  mouseMove(event: MouseEvent) {

  }
}
