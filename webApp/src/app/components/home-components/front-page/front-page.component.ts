import { Component, OnInit } from '@angular/core';
import { TextTypingAnimationComponent } from '../../ui/text-typing-animation/text-typing-animation.component';
import { BackgroundSwipeEffectComponent } from '../../ui/background-swipe-effect/background-swipe-effect.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-front-page',
  imports: [TextTypingAnimationComponent, BackgroundSwipeEffectComponent, NgIf],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent implements OnInit {
    timings: number[] = [0, 500, 1000, 2000, 3000, 3400, 3100];
    activate: boolean[] = Array(this.timings.length).fill(false);

    ngOnInit(): void {
        for(let i = 0; i < this.activate.length; i++) {
            setTimeout(() => {
                this.activate[i] = true;
            }, this.timings[i]);
        }
    }
    

}
