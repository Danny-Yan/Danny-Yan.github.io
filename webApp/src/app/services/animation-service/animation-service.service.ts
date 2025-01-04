import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationServiceService {

  constructor() { }

  animateSVGs(){
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('showpath');
          }
      });
    });

    let svgObject = document.querySelectorAll('.svgdesmos');
    svgObject.forEach((svgQuery) => {
        const svgelm = svgQuery.querySelectorAll('path');
        var noPaths = svgelm.length;
        var count = 0;
        svgelm.forEach((path) => {
            const length = path.getTotalLength();
            path.setAttribute("stroke-dashoffset", `${length}px`);
            path.setAttribute("stroke-dasharray", `${length}px`);
            path.setAttribute("animation-delay", `${count / (noPaths)}s`); 
            count += 1;
            observer.observe(path);
        });
    });
  
    // const desmosButton = document.getElementById('svgdesmosbutton');
    // this.observer.observe(desmosButton); 
  }
}
