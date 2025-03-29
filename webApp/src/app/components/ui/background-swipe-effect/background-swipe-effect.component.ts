import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-swipe-effect',
  imports: [NgClass],
  templateUrl: './background-swipe-effect.component.html',
  styleUrl: './background-swipe-effect.component.css'
})
export class BackgroundSwipeEffectComponent {
    @Input({required: true}) start: boolean = false;

}
