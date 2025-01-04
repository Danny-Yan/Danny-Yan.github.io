import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationServiceService {

  constructor() { }

  animateSVGs(): void{
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              console.log(entry.target); 
              entry.target.classList.add('showpath');
          }
      });
    });

    let svgObject = document.querySelectorAll('.svgdesmos');
    console.log(svgObject);


    svgObject.forEach((svgQuery: any) => {  
        svgQuery.onload = () => {
          console.log(svgQuery.contentDocument);
          const svgelm = svgQuery.contentDocument.querySelectorAll('path');
          console.log(svgelm);
          var noPaths = svgelm.length;
          var count = 0;
          svgelm.forEach((path: any) => {
              const length = path.getTotalLength();
              path.setAttribute("stroke-dashoffset", `${length}px`);
              path.setAttribute("stroke-dasharray", `${length}px`);
              path.setAttribute("animation-delay", `${count / (noPaths)}s`); 
              count += 1;
              observer.observe(path);
          });
        }
    });
  
    // const desmosButton = document.getElementById('svgdesmosbutton');
    // this.observer.observe(desmosButton); 
  }
}
