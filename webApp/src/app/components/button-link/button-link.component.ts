import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-link',
  imports: [RouterLink],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css'
})
export class ButtonLinkComponent {
  @Input({ required: true }) Name: string = '';
  @Input({ required: true }) Link: string = '';
  @Input({ required: true }) Color: any;
  @Input({ required: true }) Hover_Color: any;
}
