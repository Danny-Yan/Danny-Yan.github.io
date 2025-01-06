import { Component, Input, OnInit} from '@angular/core';
import { AnimationServiceService } from '../../../services/animation-service/animation-service.service';
import { SafePipe } from '../../../pipes/safe-pipe/safe-pipe.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-svg-object',
  imports: [SafePipe, NgClass],
  templateUrl: './svg-object.component.html',
  styleUrl: './svg-object.component.css'
})
export class SvgObjectComponent implements OnInit {
    @Input({ required: true }) svg: string = '';
    @Input() class: string = "";
    svg_url: string = '';

    constructor( private animationService: AnimationServiceService) {}

    ngOnInit(): void {
      this.svg_url = `/svg/desmos_svg/${this.svg}`;
      this.animationService.animateSVGs();
    }
}
