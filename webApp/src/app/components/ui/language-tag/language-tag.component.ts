import { NgClass, NgStyle } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-language-tag',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './language-tag.component.html',
  styleUrl: './language-tag.component.css'
})
export class LanguageTagComponent implements OnInit{
    @Input({required: true}) language: string = "";
    faBookmark = faBookmark;

    bgColor: string = "text-blue-200";
    textColour: string = "black";

    languageTags = new Map([
                          [ "html" , [ "text-blue-200", "black" ]],
                          [ "css" , [ "text-blue-300", "black" ]],
                          [ "js" , [ "text-yellow-200", "black" ]],
                          [ "ts" , [ "text-blue-400", "black" ]],
                          [ "java" , [ "text-red-200", "black" ]],
                          [ "python" , [ "text-green-200", "black" ]],
                          [ "php" , [ "text-purple-200", "black" ]],
                          [ "cpp" , [ "text-gray-200", "black" ]],
                          ]);

    ngOnInit() {
      this.language = this.language.toLowerCase();
        if (this.languageTags.has(this.language)) {
            this.bgColor = this.languageTags.get(this.language)?.[0] ?? "text-blue-200";
            this.textColour = this.languageTags.get(this.language)?.[1] ?? "black";
        }
      }
}
