import { Component } from '@angular/core';
import { ButtonLinkComponent } from '../../../components/ui/button-link/button-link.component';
import { SvgObjectComponent } from '../../../components/ui/svg-object/svg-object.component';
import { CoolerButtonLinkComponent } from '../../../components/ui/cooler-button-link/cooler-button-link.component';
import { CoolerCircleButtonLinkComponent } from '../../../components/ui/cooler-circle-button-link/cooler-circle-button-link.component';
@Component({
  selector: 'app-desmos-highlight',
  imports: [ButtonLinkComponent, SvgObjectComponent, CoolerButtonLinkComponent, CoolerCircleButtonLinkComponent],
  templateUrl: './desmos-highlight.component.html',
  styleUrl: './desmos-highlight.component.css'
})
export class DesmosHighlightComponent{

// Figure out why the hell button just shows up randomly / button not scaling properly

}
