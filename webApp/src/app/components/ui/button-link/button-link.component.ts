import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-button-link',
  imports: [RouterLink, NgClass],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css'
})
export class ButtonLinkComponent {
  @Input({ required: true }) Name: string = '';
  @Input() Link: string = '';
  @Input() source: string = '';
  @Input({ required: true }) bg_classes: any = "";
}
