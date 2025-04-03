import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-language-tag',
  imports: [],
  templateUrl: './language-tag.component.html',
  styleUrl: './language-tag.component.css'
})
export class LanguageTagComponent {
    @Input({required: true}) language: string = "";
    @Input() bgColor: string = "bg-blue-200";
    @Input() borderColor: string = "bg-blue-300";
    @Input() textColour: string = "black";
}
