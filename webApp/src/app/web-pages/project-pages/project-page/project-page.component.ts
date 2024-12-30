import { Component } from '@angular/core';
import { DiscordHighlightComponent } from '../discord-highlight/discord-highlight.component';
import { DesmosHighlightComponent } from '../desmos-highlight/desmos-highlight.component';

@Component({
  selector: 'app-project-page',
  imports: [DiscordHighlightComponent, DesmosHighlightComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

}
