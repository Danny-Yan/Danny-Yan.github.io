import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from '../button-link/button-link.component';

@Component({
  selector: 'app-mini-card',
  imports: [ButtonLinkComponent],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imgUrl: string = '';
  @Input() link: string = '';
}
