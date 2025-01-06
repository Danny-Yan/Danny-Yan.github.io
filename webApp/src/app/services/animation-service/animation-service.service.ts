import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationServiceService {

  constructor() { }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showpath');
        }
    });
  });

  animateSVGs(): void{
    let svgObject = document.querySelectorAll('.svgdesmos');

    svgObject.forEach((svgQuery: any) => {  
        svgQuery.onload = () => {
          const svgelm = svgQuery.contentDocument.querySelectorAll('path');
          var noPaths = svgelm.length;
          var count = 0;
          svgelm.forEach((path: any) => {
              const length = path.getTotalLength();
              path.setAttribute("stroke-dashoffset", `${length}px`);
              path.setAttribute("stroke-dasharray", `${length}px`);
              path.setAttribute("animation-delay", `${count / (noPaths)}s`); 
              count += 1;
              this.observer.observe(path);
          });
        }
    });
  }
}
