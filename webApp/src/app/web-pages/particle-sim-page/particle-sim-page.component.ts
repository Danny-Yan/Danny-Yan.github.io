import { Component, AfterViewInit } from '@angular/core';
import { VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { SimpleArrowButtonComponent } from '../../components/ui/simple-arrow-button/simple-arrow-button.component';
import { ButtonLinkComponent } from '../../components/ui/button-link/button-link.component';

@Component({
  selector: 'app-particle-sim-page',
  imports:  [VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule, ButtonLinkComponent],
  templateUrl: './particle-sim-page.component.html',
  styleUrl: './particle-sim-page.component.css'
})
export class ParticleSimPageComponent {

    api: VgApiService = new VgApiService();
    onPlayerReady(source: VgApiService) {
        this.api = source;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.play.bind(this))
    };

    play(): void{
        this.api.play();
    }

    ngAfterViewInit(): void {
        this.play();
    }

}
