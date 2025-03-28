import { Component, OnInit } from '@angular/core';
import { TextTypingAnimationComponent } from '../../ui/text-typing-animation/text-typing-animation.component';

@Component({
  selector: 'app-front-page',
  imports: [TextTypingAnimationComponent],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent implements OnInit {
    activateHI = false;
    activateHELLO = false;
    activateWELCOME = false;

    ngOnInit(): void {
        this.activateHI = true;
        setTimeout(() => {
            this.activateHELLO = true;
        }, 500);
        setTimeout(() => {
            this.activateWELCOME = true;
        }, 1000);
    }
    

}
