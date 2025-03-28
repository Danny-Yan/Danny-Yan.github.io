import { NgClass} from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-typing-animation',
  imports: [NgClass],
  templateUrl: './text-typing-animation.component.html',
  styleUrl: './text-typing-animation.component.css'
})
export class TextTypingAnimationComponent {
    @Input() start: boolean = false;
    @Input({required: true}) text: string = "";
}
