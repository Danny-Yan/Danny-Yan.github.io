import { Component, Input } from '@angular/core';
import { AnimationServiceService } from '../../services/animation-service/animation-service.service';

@Component({
  selector: 'app-svg-object',
  imports: [],
  templateUrl: './svg-object.component.html',
  styleUrl: './svg-object.component.css'
})
export class SvgObjectComponent {
    @Input({ required: true }) svg: string = '';

    constructor( private animationService: AnimationServiceService){}
}
