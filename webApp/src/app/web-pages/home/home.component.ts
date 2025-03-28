import { Component } from '@angular/core';
import { FrontPageComponent } from '../../components/home-components/front-page/front-page.component';
import { FrontPageSlidesComponent } from '../../components/home-components/front-page-slides/front-page-slides.component';
import { FrontPageAboutComponent } from '../../components/home-components/front-page-about/front-page-about.component';
import { FrontPageContactComponent } from '../../components/home-components/front-page-contact/front-page-contact.component';

@Component({
  selector: 'app-home',
  imports: [FrontPageComponent, FrontPageSlidesComponent, FrontPageAboutComponent, FrontPageContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
