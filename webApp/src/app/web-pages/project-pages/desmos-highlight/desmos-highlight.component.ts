import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonLinkComponent } from '../../../components/button-link/button-link.component';

@Component({
  selector: 'app-desmos-highlight',
  imports: [RouterLink, ButtonLinkComponent],
  templateUrl: './desmos-highlight.component.html',
  styleUrl: './desmos-highlight.component.css'
})
export class DesmosHighlightComponent {

}
