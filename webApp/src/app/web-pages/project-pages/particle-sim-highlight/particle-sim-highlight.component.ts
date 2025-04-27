import { Component, AfterViewInit } from '@angular/core';
import { VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { ButtonLinkComponent } from '../../../components/ui/button-link/button-link.component';

@Component({
  selector: 'app-particle-sim-highlight',
  imports: [VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule, ButtonLinkComponent],
  templateUrl: './particle-sim-highlight.component.html',
  styleUrl: './particle-sim-highlight.component.css'
})
export class ParticleSimHighlightComponent implements AfterViewInit {
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
