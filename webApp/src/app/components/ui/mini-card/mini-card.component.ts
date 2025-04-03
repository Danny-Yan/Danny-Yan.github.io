import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from '../button-link/button-link.component';
import { LanguageTagComponent } from '../language-tag/language-tag.component';

@Component({
  selector: 'app-mini-card',
  imports: [ButtonLinkComponent, LanguageTagComponent],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
  @Input({required: true}) title: string = '';
  @Input() description: string = '';
  @Input({required: true}) imgUrl: string = '';
  @Input({required: true}) link: string = '';
  @Input() languages: {} = {};

}
