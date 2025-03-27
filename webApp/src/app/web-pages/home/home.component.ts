import { Component } from '@angular/core';
import { FrontPageComponent } from '../../components/home-components/front-page/front-page.component';
import { FrontPageSlidesComponent } from '../../components/home-components/front-page-slides/front-page-slides.component';

@Component({
  selector: 'app-home',
  imports: [FrontPageComponent, FrontPageSlidesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
