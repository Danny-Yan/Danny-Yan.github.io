import { Component } from '@angular/core';
import { DiscordHighlightComponent } from '../discord-highlight/discord-highlight.component';
import { DesmosHighlightComponent } from '../desmos-highlight/desmos-highlight.component';
import { UiHighlightComponent } from '../ui-highlight/ui-highlight.component';

@Component({
  selector: 'app-project-page',
  imports: [DiscordHighlightComponent, DesmosHighlightComponent, UiHighlightComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

}
