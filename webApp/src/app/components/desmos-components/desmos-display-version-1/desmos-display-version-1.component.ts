import { Component, Input } from '@angular/core';
import { SvgObjectComponent } from '../../ui/svg-object/svg-object.component';

@Component({
  selector: 'app-desmos-display-version-1',
  imports: [SvgObjectComponent],
  templateUrl: './desmos-display-version-1.component.html',
  styleUrl: './desmos-display-version-1.component.css'
})
export class DesmosDisplayVersion1Component {
  @Input({required: true}) link: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) svg: string = '';
}
