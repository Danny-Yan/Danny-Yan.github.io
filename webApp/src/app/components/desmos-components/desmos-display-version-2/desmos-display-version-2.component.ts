import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SvgObjectComponent } from '../../ui/svg-object/svg-object.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-desmos-display-version-2',
  imports: [SvgObjectComponent, FontAwesomeModule],
  templateUrl: './desmos-display-version-2.component.html',
  styleUrl: './desmos-display-version-2.component.css'
})
export class DesmosDisplayVersion2Component implements AfterViewInit {
  @Input({required: true}) link: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) svg: string = '';
  @ViewChild('display_dom') displayDom: ElementRef = ElementRef.prototype;
  @ViewChild('desmos_link') desmosLink: ElementRef = ElementRef.prototype;
  faXmark = faXmark;
  faArrowRight = faArrowRight;

  ngAfterViewInit(): void {
      // console.log(this.displayDom.nativeElement);
  };

  open() {
    this.displayDom.nativeElement.style.top = "0px";
    this.displayDom.nativeElement.classList.add('no-doc-scroll');
  };
  close() {
    this.displayDom.nativeElement.style.top = "-100%";
    this.displayDom.nativeElement.classList.remove('no-doc-scroll');

  };
}
