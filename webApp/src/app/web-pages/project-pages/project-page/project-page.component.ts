import { Component } from '@angular/core';
import { DiscordHighlightComponent } from '../discord-highlight/discord-highlight.component';
import { DesmosHighlightComponent } from '../desmos-highlight/desmos-highlight.component';
import { UiHighlightComponent } from '../ui-highlight/ui-highlight.component';
import { ParticleSimHighlightComponent } from '../particle-sim-highlight/particle-sim-highlight.component';

@Component({
  selector: 'app-project-page',
  imports: [DiscordHighlightComponent, DesmosHighlightComponent, UiHighlightComponent, ParticleSimHighlightComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {
  // Parallax scrolling using js, little css
  // Css for child components are isolated from their parents, and so stuff like
  // perspective and body styling doesn't affect them
  // Using HostListener('window.scroll', ['$event']) hasScrolledIntoView(){}
  // Detect for specific css class names (perspective-elm-1, perspective-elm-2, etc) to get around css limitation
  // https://stackoverflow.com/questions/70800616/parallax-like-with-angular-onscroll-event
}
